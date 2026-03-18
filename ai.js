// ai.js - Pure JavaScript AI Engine

const AI = {
    ready: true,
    
    users: {},
    
    templates: {
        study: [
            "Your brain is ready for this",
            "One page at a time",
            "Future you will be grateful"
        ],
        workout: [
            "Your body deserves this",
            "20 minutes = whole day energy",
            "Sweat now, shine later"
        ],
        work: [
            "Progress over perfection",
            "One task at a time",
            "You've got this"
        ],
        default: [
            "You got this",
            "Keep going",
            "Small steps count"
        ]
    },
    
    chatResponses: {
        tired: "Take 5 deep breaths. Then do 5 minutes.",
        stuck: "Break it into smaller pieces. What's step 1?",
        done: "Great job! You made progress.",
        default: "Tell me more."
    },
    
    getMotivation: function(task, userId) {
        let type = 'default';
        if(task.includes('study')) type = 'study';
        if(task.includes('workout')) type = 'workout';
        if(task.includes('work')) type = 'work';
        
        const options = this.templates[type];
        return options[Math.floor(Math.random() * options.length)];
    },
    
    chat: function(message, userId) {
        const msg = message.toLowerCase();
        
        if(msg.includes('tired')) return this.chatResponses.tired;
        if(msg.includes('stuck')) return this.chatResponses.stuck;
        if(msg.includes('done')) return this.chatResponses.done;
        
        return this.chatResponses.default;
    }
};

// Make sure it's available
window.AI = AI;
console.log("AI Engine Loaded");