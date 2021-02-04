const gamesConst = [
    // DEAD SPACE
    {
        name: `dead space`,
        ima: `img/deadspace.jpg`,
        link1: `res/deadspace/dsgoogledrive.txt`,
    },
    {
        name: `dead space 2`,
        ima: `img/Dead_Space_2_Boxart.jpg`,
        link1: `res/deadspace/ds2googledrive.txt`,
    },
    {
        name: `dead space 3`,
        ima: `img/Dead_space_3_cover.jpg`,
        link1: `res/deadspace/ds3googledrive.txt`,
    },
    // GRAN THEF AUTO
    {
        name: `grand thef auto v gta 5`,
        ima: `img/GTA-V-portada.jpg`,
        link1: `res/gta/gta5googledrive.txt`,
        link2: `res/gta/gta5mega.txt`
    },
    {
        name: `grand thef auto iv gta 4`,
        ima: `img/Grand_Theft_Auto_IV.JPG.jpg`,
        link1: `res/gta/gta4googledrive.txt`,
        link2: `res/gta/gta4mega.txt`
    },
    {
        name: `grand thef auto i grand thef auto ii grand thef auto iii gta 1 gta 2 gta 3`,
        ima: `img/GTA_1-2-3.jpg`,
        link1: `res/gta/gta123googledrive.txt`,
        link2: `res/gta/gta123mega.txt`
    },
    {
        name: `grand thef auto vice city stories gta`,
        ima: `img/Grand_Theft_Auto_Vice_City_Stories.png`,
        link1: `res/gta/gtavcsgoogledrive.txt`,
        link2: `res/gta/gtavcsmega.txt`
    },
    {
        name: `grand thef auto vice city gta`,
        ima: `img/Grand_Theft_Auto_Vice_City.JPG.jpg`,
        link1: `res/gta/gtavcgoogledrive.txt`,
        link2: `res/gta/gtavcmega.txt`
    },
    {
        name: `grand thef auto san andreas gta`,
        ima: `img/Grand_Theft_Auto_SanAndreas.jpg`,
        link1: `res/gta/gtasagoogledrive.txt`,
        link2: `res/gta/gtasamega.txt`
    },
    // METAL GEAR SOLID
    {
        name: `metal gear solid 5 phanton paint`,
        ima: `img/MGS5_Carátula.png`,
        link1: `res/mgs/mgs5googledrive.txt`,
        link2: `res/mgs/mgs5mega.txt`,
    },
    {
        name: `metal gear solid 5 ground zeroes`,
        ima: `img/mgsground5.jpg`,
        link1: `res/mgs/mgsgzgoogledrive.txt`,
    },
    {
        name: `metal gear solid rising revengeance`,
        ima: `img/Metal-Gear-Rising_-Revengeance-285x380.jpg`,
        link1: `res/mgs/mgsrrgoogledrive.txt`,
        link2: `res/mgs/mgsrrmega.txt`,
    },
    // MORTAL KOMBAT
    {
        name: `mortal kombat 11`,
        ima: `img/mortal-kombat-11-ultimate-edition-cover-uut.jpg`,
        link1: `res/mortal kombat/mk11googledrive.txt`,
        link2: `res/mortal kombat/mk11mega.txt`
    },
    {
        name: `mortal kombat xl mortal kombat 10`,
        ima: `img/mkxl.jpg`,
        link1: `res/mortal kombat/mkxlgoogledrive.txt`,
        link2: `res/mortal kombat/mkxlmega.txt`
    },
    {
        name: `mortal kombat komplete edition mortal kombat 9`,
        ima: `img/mk9.jpg`,
        link1: `res/mortal kombat/mk9googledrive.txt`,
        link2: `res/mortal kombat/mk9mega.txt`,
        link3: `res/mortal kombat/mk9mediafire.txt`
    },
    {
        name: `mortal kombat arcade kollection`,
        ima: `img/Mortal-Kombat-Arcade-Kollection.jpg`,
        link1: `res/mortal kombat/mkaktodo.txt`,
    },
    // NEED FOR SPEED
    {
        name: `need for speed heat nfs heat`,
        ima: `img/needspeedheat_2931863b.jpg`,
        link1: `res/needForSpeed/nfshgoogledrive.txt`,
        link2: `res/needForSpeed/nfshmega.txt`
    },
    {
        name: `need for speed payback nfs payback`,
        ima: `img/nfsPayback.jpg`,
        link1: `res/needForSpeed/nfspgoogledrive.txt`,
        link2: `res/needForSpeed/nfspmega.txt`,
        link3: `res/needForSpeed/nfspmediafire.txt`
    },
    {
        name: `need for speed rivals nfs rivals`,
        ima: `img/descargar-Need-For-Speed-Rivals.jpg`,
        link1: `res/needForSpeed/nfsrgoogledrive.txt`,
        link2: `res/needForSpeed/nfsrmega.txt`,
        link3: `res/needForSpeed/nfsrmediafire.txt`
    },
    {
        name: `need for speed most wanted nfs most wanted`,
        ima: `img/MW2012.jpg`,
        link1: `res/needForSpeed/nfsmw2googledrive.txt`,
        link2: `res/needForSpeed/nfsmw2mega.txt`,
        link3: `res/needForSpeed/nfsmw2mediafire.txt`
    },
    {
        name: `need for speed the run nfs the run`,
        ima: `img/nfs-the-run-gen-packart.jpg`,
        link1: `res/needForSpeed/nfstrgoogledrive.txt`,
        link2: `res/needForSpeed/nfstrmega.txt`,
        link3: `res/needForSpeed/nfstrmediafire.txt`
    },
    {
        name: `need for speed shift 2 nfs shift 2`,
        ima: `img/need-for-speed-shift-2-unleashed-gen-packart.jpg`,
        link1: `res/needForSpeed/nfss2googledrive.txt`,
        link2: `res/needForSpeed/nfss2mega.txt`,
    },
    {
        name: `need for speed hot pursuit nfs hot pursuit`,
        ima: `img/nfs-hot-pursuit-gen-packart.jpg`,
        link1: `res/needForSpeed/nfshpgoogledrive.txt`,
        link2: `res/needForSpeed/nfshpmega.txt`,
        link3: `res/needForSpeed/nfshpmediafire.txt`
    },
    {
        name: `need for speed shift nfs shift`,
        ima: `img/Need_For_Speed_Shift_Portada.jpg`,
        link1: `res/needForSpeed/nfssgoogledrive.txt`,
        link2: `res/needForSpeed/nfssmega.txt`,
        link3: `res/needForSpeed/nfssmediafire.txt`,
    },
    {
        name: `need for speed undercover nfs undercover`,
        ima: `img/need-for-speed-undercover-cover.jpg`,
        link1: `res/needForSpeed/nfsugoogledrive.txt`,
        link2: `res/needForSpeed/nfsumega.txt`,
        link3: `res/needForSpeed/nfsumediafire.txt`,
    },
    {
        name: `need for speed carbono nfs carbono`,
        ima: `img/NFSCBoxArt.png`,
        link1: `res/needForSpeed/nfscgoogledrive.txt`,
        link2: `res/needForSpeed/nfscmega.txt`,
        link3: `res/needForSpeed/nfscmediafire.txt`,
    },
    {
        name: `need for speed most wanted nfs most wanted`,
        ima: `img/NFSMW_Boxart.jpg`,
        link1: `res/needForSpeed/nfsmwmega.txt`,
        link2: `res/needForSpeed/nfsmwmediafire.txt`,
    },
    {
        name: `need for speed underground 2 nfs underground 2`,
        ima: `img/NFSUN2.jpg`,
        link1: `res/needForSpeed/nfsu2googledrive.txt`,
        link2: `res/needForSpeed/nfsu2mega.txt`,
        link3: `res/needForSpeed/nfsu2mediafire.txt`,
    },

    // RESIDENT EVIL
    {
        name: `resident evil 3 remake nemesis`,
        ima: `img/resident-evil-3-remake___Glb6Ejtf_720x0__1.jpg`,
        link1: `res/resident evil/re3rgoogledrive.txt`,
        link2: `res/resident evil/re3rmega.txt`,
        link3: `res/resident evil/re3rmediafire.txt`
    },
    {
        name: `resident evil 2 remake`,
        ima: `img/resident-evil-2-remake-20191141048287_1.jpg`,
        link1: `res/resident evil/re2rmega.txt`,
        link2: `res/resident evil/re2rmediafire.txt`,
    },
    {
        name: `resident evil 7 vii biohazard gold edition`,
        ima: `img/re7.jpg`,
        link1: `res/resident evil/re7mega.txt`,
        link2: `res/resident evil/re7mediafire.txt`,
        link3: `res/resident evil/re7googledrive.txt`,
    },
    {
        name: `resident evil zero 0 hd remaster`,
        ima: `img/rezero.jpg`,
        link1: `res/resident evil/rezmega.txt`,
        link2: `res/resident evil/rezmediafire.txt`,
    },
    {
        name: `resident evil revelations 2`,
        ima: `img/rer2.jpeg`,
        link1: `res/resident evil/rer2googledrive.txt`,
        link2: `res/resident evil/rer2mediafire.txt`,
    },
    {
        name: `resident evil hd remaster`,
        ima: `img/resident-evil-hd-remaster-2015121151211_1.jpg`,
        link1: `res/resident evil/rehrgoogledrive.txt`,
        link2: `res/resident evil/rehrmediafire.txt`,
        link3: `res/resident evil/rehrmega.txt`,
    },
    {
        name: `resident evil 4 ultimate hd edition`,
        ima: `img/re4uhde.jpg`,
        link1: `res/resident evil/re4uhegoogledrive.txt`,
        link2: `res/resident evil/re4uhemediafire.txt`,
        link3: `res/resident evil/re4uhemega.txt`,
    },
    {
        name: `resident evil 6`,
        ima: `img/ResidentEvil6.jpg`,
        link1: `res/resident evil/re6googledrive.txt`,
        link2: `res/resident evil/re6mediafire.txt`,
        link3: `res/resident evil/re6mega.txt`,
    },
    {
        name: `resident evil operation raccoon city`,
        ima: `img/42546-resident-evil-operation-racoon-city-print.jpg`,
        link1: `res/resident evil/reorcgoogledrive.txt`,
        link2: `res/resident evil/reorcmediafire.txt`,
        link3: `res/resident evil/reorcmega.txt`,
    },
    {
        name: `resident evil revelations`,
        ima: `img/re-revelations-portada.jpg`,
        link1: `res/resident evil/rergoogledrive.txt`,
        link2: `res/resident evil/rermediafire.txt`,
        link3: `res/resident evil/rermega.txt`,
    },
    {
        name: `resident evil 5 gold edition`,
        ima: `img/re5-pic.jpg`,
        link1: `res/resident evil/re5googledrive.txt`,
        link2: `res/resident evil/re5mediafire.txt`,
        link3: `res/resident evil/re5mega.txt`,
    },


    // RED DEAD REDENTION 2
    {
        name: `red dead redention ii rdr 2`,
        ima: `img/Red-Dead-Redemption-2-Ultimate-Edition-PS4.jpg`,
        link1: `res/rdr2/rdr2googledrive.txt`,
        link2: `res/rdr2/rdr2mega.txt`,
    },
]