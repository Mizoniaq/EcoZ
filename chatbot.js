// --- SESSION ID LOGIC ---
let sessionID = generateSessionID();
let lastMessageTime = Date.now();

function generateSessionID() {
    return 'sess-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function refreshSessionIfNeeded() {
    const now = Date.now();
    if (now - lastMessageTime > 6 * 60 * 1000) { // 6 minutes
        sessionID = generateSessionID();
    }
    lastMessageTime = now;
}

// Chatbot logic
const webhookUrl = 'https://big-frankly-raven.ngrok-free.app/webhook/c940a173-3fbf-454b-bd10-f7d0e19b5e90';

function addMessage(text, from) {
    const messages = document.getElementById('eco-chatbot-messages');
    const msg = document.createElement('div');
    msg.textContent = text;
    msg.style.alignSelf = from === 'user' ? 'flex-end' : 'flex-start';
    msg.style.background = from === 'user' ? '#6fcf97' : '#23231f';
    msg.style.color = from === 'user' ? '#181c18' : '#e0e0e0';
    msg.style.padding = '0.6rem 1rem';
    msg.style.borderRadius = '18px';
    msg.style.maxWidth = '80%';
    msg.style.marginBottom = '2px';
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add chatbot HTML to the page
    const chatbotHTML = `
        <div id="eco-chatbot-btn" style="position:fixed;bottom:32px;right:32px;z-index:9999;cursor:pointer;background:#23231f;border-radius:50%;width:60px;height:60px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 12px 0 rgba(0,0,0,0.18);">
            <span style="font-size:2rem;color:#6fcf97;">💬</span>
        </div>
        <div id="eco-chatbot-window" style="display:none;position:fixed;bottom:100px;right:32px;z-index:10000;width:340px;max-width:95vw;background:#181c18;border-radius:16px;box-shadow:0 4px 24px 0 rgba(0,0,0,0.25);overflow:hidden;flex-direction:column;min-width:300px;min-height:400px;height:500px;resize:both;">
            <div id="eco-chatbot-header" style="background:#23231f;padding:1rem;color:#6fcf97;font-weight:600;display:flex;justify-content:space-between;align-items:center;cursor:move;flex:0 0 auto;">
                <span>GLitcH</span>
                <button id="eco-chatbot-close" style="background:none;border:none;color:#bfa76f;font-size:1.3rem;cursor:pointer;">✕</button>
            </div>
            <div id="eco-chatbot-messages" style="padding:1rem;flex:1 1 auto;overflow-y:auto;font-size:1rem;display:flex;flex-direction:column;gap:0.7rem;background:#181c18;"></div>
            <form id="eco-chatbot-form" style="display:flex;border-top:1px solid #23231f;background:#23231f;padding:0.5rem;flex:0 0 auto;">
                <input id="eco-chatbot-input" type="text" placeholder="Type your question..." autocomplete="off" style="flex:1;padding:0.5rem 1rem;border:none;background:#23231f;color:#e0e0e0;font-size:1rem;outline:none;">
                <button type="submit" style="background:#6fcf97;color:#181c18;border:none;padding:0 1.2rem;font-weight:600;font-size:1.1rem;cursor:pointer;border-radius:4px;">Send</button>
            </form>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    // Initialize chatbot functionality
    const btn = document.getElementById('eco-chatbot-btn');
    const win = document.getElementById('eco-chatbot-window');
    const closeBtn = document.getElementById('eco-chatbot-close');
    const form = document.getElementById('eco-chatbot-form');
    const input = document.getElementById('eco-chatbot-input');
    const header = document.getElementById('eco-chatbot-header');

    // Dragging functionality
    let isDragging = false;
    let startX, startY, startRight, startBottom;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startRight = parseInt(getComputedStyle(win).right);
        startBottom = parseInt(getComputedStyle(win).bottom);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = startX - e.clientX;
            const deltaY = startY - e.clientY;
            win.style.right = `${startRight + deltaX}px`;
            win.style.bottom = `${startBottom + deltaY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    btn.onclick = () => { win.style.display = 'flex'; btn.style.display = 'none'; };
    closeBtn.onclick = () => { win.style.display = 'none'; btn.style.display = 'flex'; };

    form.onsubmit = async (e) => {
        e.preventDefault();
        const userMsg = input.value.trim();
        if (!userMsg) return;
        refreshSessionIfNeeded();
        addMessage(userMsg, 'user');
        input.value = '';
        addMessage('...', 'bot');
        try {
            console.log('Sending message to webhook:', userMsg);
            const res = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg, sessionID: sessionID })
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            console.log('Received response:', data);
            
            const messages = document.getElementById('eco-chatbot-messages');
            if (!data || (!data.reply && !data.text)) {
                messages.lastChild.textContent = 'Désolé, je n\'ai pas reçu de réponse valide.';
            } else {
                messages.lastChild.textContent = data.reply || data.text;
            }
        } catch (err) {
            console.error('Error:', err);
            const messages = document.getElementById('eco-chatbot-messages');
            messages.lastChild.textContent = 'Désolé, je ne peux pas communiquer avec le serveur pour le moment.';
        }
    };
}); 