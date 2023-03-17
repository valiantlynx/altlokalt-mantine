import React from 'react'
import Gun from 'gun/gun'

function GunAuthCheck() {
    const gun = Gun({ peers: ['https://chat.valiantlynx.com/gun'] });
    let currentUser = localStorage.getItem('currentUser');
    
    gun.on('auth', () => {
        const user = gun.user();
        if (user.is) {
            currentUser = user.is.alias;
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('chat-form').style.display = 'flex';
            document.getElementById('chat-input').focus();
        }
    });
}

export default GunAuthCheck