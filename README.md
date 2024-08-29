
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alfsiezar GameDev</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/projects.css">
    <link rel="stylesheet" href="css/contact.css">

</head>
<body>
    <div id = "TopbarDiv">
        <div id = "textMenuDiv">
            <img src="pics/DevLogo.png" alt="Alf Siezar Developer Logo" id="logo">
        </div>
        <div id = "RightMenuDiv">
            <img src = "icons/burgerMenuIcon.webp" alt = "BurgerMenuIcon" id = "BurgerMenu">
            <a class = "TopbarButton" href="#">Home</a>
            <a class = "TopbarButton" href="#AboutDiv">About</a>
            <a class = "TopbarButton" href="#ProjectsDiv">Projects</a>
            <a class = "TopbarButton" href="#ContactDiv" style = "padding-right: 100px;">Contact</a>
            </div>
    </div>

    <div id="sideMenu" class="sideMenu">
        <a href="#">Home</a>
        <a href="#ProjectsDiv">Projects</a>
        <a href="#AboutDiv">About</a>
        <a href="#ContactDiv">Contact</a>
    </div>

    <div class="Home">
        <p class="Introduction">
            Hi, my name is <span>Alfredo Siezar,</span>
        </p>
        <p class="Description">
            and I'm
        </p>
        <p> <span class = "typing"></span> </p>
    </div>

    <div id = "AboutDiv">
        <h1 id = "AboutSection">About Me</h1>
        <div id = "AboutContainer">
            <img src = "pics/MyPicture.jpg" alt = "My Photo"  id = "MyPhoto">
            <div id="SkillsDiv">
                <p class="AboutText">
                    I was born in Nicaragua and earned my degree in Video Game Design and Programming from <span style="font-weight: bolder;">UDIT </span>(University of Design and Technology) in Madrid, Spain.
                    I have experience with various programming languages such as: <span style="font-weight: bolder;">C#, C++, JavaScript & Python</span>.
                    I also have experience with programs such as <span style="font-weight: bolder;">Unity, Unreal Engine, 3Ds Max, Photoshop, Illustrator, etc...</span>
                </p>
                <h2 class="Skills">Skills</h2>
                <div class="skillRow">
                    <p class="skill">C#</p>
                    <div class="skillBar">
                        <div class="fill" style="max-width: 90%;"></div>
                    </div>
                </div>
                <div class="skillRow">
                    <p class="skill">C++</p>
                    <div class="skillBar">
                        <div class="fill" style="max-width: 90%;"></div>
                    </div>
                </div>
                <div class="skillRow">
                    <p class="skill">Python</p>
                    <div class="skillBar">
                        <div class="fill" style="max-width: 70%;"></div>
                    </div>
                </div>
                <div class="skillRow">
                    <p class="skill">JavaScript</p>
                    <div class="skillBar">
                        <div class="fill" style="max-width: 80%;"></div>
                    </div>
                </div>
                <div class="skillRow">
                    <p class="skill">html</p>
                    <div class="skillBar">
                        <div class="fill" style="max-width: 90%;"></div>
                    </div>
                </div>
                <div class="skillRow">
                    <p class="skill">CSS</p>
                    <div class="skillBar">
                        <div class="fill" style="max-width: 90%;"></div>
                    </div>
                </div>
                <div class="skillRow">
                    <p class="skill">Unity</p>
                    <div class="skillBar">
                        <div class="fill" style="max-width: 95%;"></div>
                    </div>
                </div>
                <div class="skillRow">
                    <p class="skill">Unreal Engine</p>
                    <div class="skillBar">
                        <div class="fill" style="max-width: 90%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="ProjectsDiv">
        <h2 class = "Section">Projects</h1>

        <div class="GameDiv">
            <div class="video-container">
                <img src="pics/Winter1939Logo.png" alt="Winter 1939 Logo" class="image">
                <iframe 
                    class="video"
                    src="https://www.youtube.com/embed/QF7DXVjI0SA?si=0rZ_Qjwbm58X6fer" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
            <h2 class="ProjectTitle"id = "Winter">Winter 1939</h2>
            <p class="GameText"> 
                "Winter 1939" is a VR game developed in Unreal Engine, 
                inspired by the legendary Finnish sniper Simo Häyhä. 
                This short demo offers a single game mode where your objective is to 
                eliminate as many enemies as possible before being overrun. 
                Created as a final graduation project by me and two colleagues, 
                the game is available for free to download on my itch.io page.
            </p>
        </div>

        <div class="GameDiv">
            <div class="video-container">
                <img src="pics/ZombieSurvivalLogo.png" alt="Zombie Survival Logo" class="image">
                <!--<iframe 
                    class="video"
                    src="https://www.youtube.com/embed/QF7DXVjI0SA?si=0rZ_Qjwbm58X6fer" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>-->
            </div>
            <h2 class="ProjectTitle" id = "Zombie">Zombie Survival</h2>
            <p class="GameText"> 
                "Zombie Survival" is a solo-developed first-person shooter where players face relentless waves of zombies 
                in a fight for survival. Every aspect of the game, from programming and enemy AI to art, design, and sound, 
                is being crafted by me, delivering an intense and immersive experience. Your mission: survive as 
                long as you can against the ever-growing horde.
            </p>
        </div>
    </div>
    
    <div id = "ContactDiv">
        <h1 class = "Section">Contact Me</h1>
        <div class = "ContactContainer">
        </div>

    </div>
    <script src="js/main.js"></script>
    <script src="js/typing.js"></script>
    <script src="js/about.js"></script>


</body>
</html>