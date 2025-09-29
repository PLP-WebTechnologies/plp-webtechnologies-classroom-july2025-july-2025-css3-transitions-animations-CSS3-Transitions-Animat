/* ===== Part 1: CSS Transitions ===== */
.animate-btn {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.5s ease, transform 0.3s ease;
}

.animate-btn:hover {
    background-color: #2ecc71;
    transform: scale(1.1);
}

/* Box with transition */
.box {
    width: 100px;
    height: 100px;
    background-color: #e74c3c;
    margin-top: 20px;
    transition: transform 0.5s ease, background-color 0.5s ease;
}

.box:hover {
    transform: rotate(20deg) scale(1.2);
    background-color: #8e44ad;
}

/* ===== Part 3: Keyframe Animations ===== */
.animated-box {
    width: 100px;
    height: 100px;
    background-color: #f1c40f;
    margin-top: 20px;
    position: relative;
}

/* Define a slide + fade animation */
@keyframes slideFade {
    0% { transform: translateX(0); opacity: 1; }
    50% { transform: translateX(150px); opacity: 0.5; }
    100% { transform: translateX(0); opacity: 1; }
}

.slide-fade {
    animation: slideFade 2s ease-in-out forwards;
}
