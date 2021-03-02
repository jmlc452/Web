const gamesConst = [
    //ASSASSINS CREED
    {
        name: `assassins creed Odyssey`,
        ima: `img/acod.jpg`,
        link1: `res/assacreed/acod.txt`,
    },
    {
        name: `assassins creed origins`,
        ima: `img/Assassin's_Creed_Origins_Caratula.jpg`,
        link1: `res/assacreed/aco.txt`,
    },
    {
        name: `assassins creed syndicate`,
        ima: `img/ac_syndicate-game_info-boxart-keyart-02-348x434-v2-logo_202005.jpg`,
        link1: `res/assacreed/acs.txt`,
    },
    {
        name: `assassins creed liberation`,
        ima: `img/ASCLIB.jpg`,
        link1: `res/assacreed/acl.txt`,
    },
    {
        name: `assassins creed chronicles russia`,
        ima: `img/acc-russia-packart_236545.jpg`,
        link1: `res/assacreed/accr.txt`,
    },
    {
        name: `assassins creed chronicles india`,
        ima: `img/acc-india-game_info-boxart-560x698_tablet_234611.jpg`,
        link1: `res/assacreed/acci.txt`,
    },
    {
        name: `assassins creed chronicles china`,
        ima: `img/accc.jpg`,
        link1: `res/assacreed/accc.txt`,
    },
    {
        name: `assassins creed unity`,
        ima: `img/acu_nakedbox_mobile_164378.jpg`,
        link1: `res/assacreed/acu.txt`,
    },
    {
        name: `assassins creed rogue`,
        ima: `img/acrogue_nakedboxshot_mobile_163691.jpg`,
        link1: `res/assacreed/acro.txt`,
    },
    {
        name: `assassins creed 4`,
        ima: `img/ac4.jpg`,
        link1: `res/assacreed/ac4.txt`,
    },
    {
        name: `assassins creed 3`,
        ima: `img/ac3_naked_boxshot_mobile_169405.jpg`,
        link1: `res/assacreed/ac3.txt`,
    },
    {
        name: `assassins creed revelations`,
        ima: `img/HLoyaNQ_350x200_1x-0.jpg`,
        link1: `res/assacreed/acr.txt`,
    },
    {
        name: `assassins creed brotherhood`,
        ima: `img/Assassins_Creed_brotherhood_cover.jpg`,
        link1: `res/assacreed/acb.txt`,
    },
    {
        name: `assassins creed 2`,
        ima: `img/Ac2cover.jpg`,
        link1: `res/assacreed/ac2.txt`,
    },
    {
        name: `assassins creed`,
        ima: `img/Accover.jpg`,
        link1: `res/assacreed/ac1.txt`,
    },
    // CALL OF DUTY
    {
        name: `call of duty modern warfare 2 remastered`,
        ima: `img/220px-Call_of_Duty_-_Modern_Warfare_Remastered`,
        link1: `res/cod/codmw2r.txt`,
    },
    {
        name: `call of duty warzone`,
        ima: `img/845726251583952289.jpg`,
        link1: `res/cod/codwz.txt`,
    },
    {
        name: `call of duty black ops 4`,
        ima: `img/Cover_Art_BO4.jpg`,
        link1: `res/cod/codbo4.txt`,
    },
    {
        name: `call of duty world at war 2`,
        ima: `img/Call_of_Duty_WWII_Cover_Art.jpg`,
        link1: `res/cod/codww2.txt`,
    },
    {
        name: `call of duty infinite warfare`,
        ima: `img/Infinite_Warfare_Game_Cover.jpg`,
        link1: `res/cod/codiw.txt`,
    },
    {
        name: `call of duty modern warfare 1 remaster`,
        ima: `img/220px-Call_of_Duty_-_Modern_Warfare_Remastered.jpeg`,
        link1: `res/cod/codmwr.txt`,
    },
    {
        name: `call of duty black ops 3`,
        ima: `img/Black_Ops_3.jpg`,
        link1: `res/cod/codbo3.txt`,
    },
    {
        name: `call of duty advance warfare`,
        ima: `img/Advanced_Warfare.jpg`,
        link1: `res/cod/codaw.txt`,
    },
    {
        name: `call of duty ghost`,
        ima: `img/Call_of_Duty_Ghosts_cover.jpg`,
        link1: `res/cod/codg.txt`,
    },
    {
        name: `call of duty black ops 2`,
        ima: `img/260px-Call_of_Duty_BO2_Cover.jpg`,
        link1: `res/cod/codbo2.txt`,
    },
    {
        name: `call of duty modern warfare 3`,
        ima: `img/call-_of-_duty-_modern-_warfare-_3-_pc_.jpg`,
        link1: `res/cod/codmw3.txt`,
    },
    {
        name: `call of duty black ops 1`,
        ima: `img/CoD_Black_Ops_cover.png`,
        link1: `res/cod/codbo1.txt`,
    },
    {
        name: `call of duty modern warfare 2`,
        ima: `img/Modern_Warfare_2_cover.png`,
        link1: `res/cod/codmw2.txt`,
    },
    {
        name: `call of duty world at war 1`,
        ima: `img/Call_of_Duty_World_at_War_cover.png`,
        link1: `res/cod/codww1.txt`,
    },
    {
        name: `call of duty 4 modern warfare`,
        ima: `img/Call_of_Duty_4_Modern_Warfare.jpg`,
        link1: `res/cod/codmw1.txt`,
    },
    {
        name: `call of duty 2`,
        ima: `img/call-of-duty-2-cover.jpg`,
        link1: `res/cod/cod2.txt`,
    },
    {
        name: `call of duty 1`,
        ima: `img/cod1cover.jpg`,
        link1: `res/cod/cod.txt`,
    },
    // DARK SOULS
    {
        name: `dark souls prepare to die`,
        ima: `img/Dark_Souls_Prepare_to_Die_Edition_Portada.jpg`,
        link1: `res/dark souls/ds2.txt`,
    },
    {
        name: `dark souls 2`,
        ima: `img/darksouls2.jpg`,
        link1: `res/dark souls/ds1.txt`,
    },
    {
        name: `dark souls 3`,
        ima: `img/Dark_souls_3_cover_art.jpg`,
        link1: `res/dark souls/ds3.txt`,
    },
    {
        name: `dark souls remaster`,
        ima: `img/DarkSoulsRemastered_XL.jpg`,
        link1: `res/dark souls/dsr.txt`,
    },
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
    // DRAGON AGE
    {
        name: `dragon age inquisition`,
        ima: `img/dragon-age-inquisition-cover.jpg`,
        link1: `res/dragonage/dai.txt`,
    },
    {
        name: `dragon age 2`,
        ima: `img/333433-dragon-age-ii-playstation-3-manual.jpg`,
        link1: `res/dragonage/da2.txt`,
    },
    {
        name: `dragon age origins`,
        ima: `img/dragonAgeOrigins.jpg`,
        link1: `res/dragonage/dao.txt`,
    },
    // FALLOUT
    {
        name: `fallout 4 game of the year`,
        ima: `img/fallout4.jpg`,
        link1: `res/fallout/f4.txt`,
    },
    {
        name: `fallout shelter`,
        ima: `img/Fallout-Shelter-cover.jpg`,
        link1: `res/fallout/fs.txt`,
    },
    {
        name: `fallout new vegas`,
        ima: `img/cover-256.png`,
        link1: `res/fallout/fnv.txt`,
    },
    {
        name: `fallout 3 game of the year`,
        ima: `img/4D6dBbj_350x200_1x-0.jpg`,
        link1: `res/fallout/f3.txt`,
    },
    {
        name: `fallout tactics`,
        ima: `img/Fallout_Tactics_Box.jpg`,
        link1: `res/fallout/ft.txt`,
    },
    {
        name: `fallout 2`,
        ima: `img/71YI2epWbnS._SL1075_.jpg`,
        link1: `res/fallout/f2.txt`,
    },
    {
        name: `fallout 1`,
        ima: `img/71flJ2CsLQS._SL1074_.jpg`,
        link1: `res/fallout/f1.txt`,
    },
    // GRAN THEF AUTO
    {
        name: `grand thef auto i grand thef auto ii grand thef auto iii gta 1 gta 2 gta 3`,
        ima: `img/GTA_1-2-3.jpg`,
        link1: `res/gta/gta123googledrive.txt`,
    },
    {
        name: `grand thef auto vice city gta`,
        ima: `img/Grand_Theft_Auto_Vice_City.JPG.jpg`,
        link1: `res/gta/gtavcgoogledrive.txt`,
    },
    {
        name: `grand thef auto vice city stories gta`,
        ima: `img/Grand_Theft_Auto_Vice_City_Stories.png`,
        link1: `res/gta/gtavcsgoogledrive.txt`,
    },
    {
        name: `grand thef auto san andreas gta`,
        ima: `img/Grand_Theft_Auto_SanAndreas.jpg`,
        link1: `res/gta/gtasagoogledrive.txt`,
    },
    {
        name: `grand thef auto iv gta 4`,
        ima: `img/Grand_Theft_Auto_IV.JPG.jpg`,
        link1: `res/gta/gta4googledrive.txt`,
    },
    {
        name: `grand thef auto v gta 5`,
        ima: `img/GTA-V-portada.jpg`,
        link1: `res/gta/gta5googledrive.txt`,
    },
    // MASS EFFECT
    {
        name: `mass effect andromeda`,
        ima: `img/mass-effect-andromeda-cover.jpg`,
        link1: `res/masseffect/mea.txt`,
    },
    {
        name: `mass effect 3`,
        ima: `img/71j1rt6O60L._SY445_.jpg`,
        link1: `res/masseffect/me3.txt`,
    },
    {
        name: `mass effect 2`,
        ima: `img/MassEffect2_cover.png`,
        link1: `res/masseffect/me2.txt`,
    },
    {
        name: `mass effect 1`,
        ima: `img/220px-MassEffect.jpg`,
        link1: `res/masseffect/me1.txt`,
    },
    // METAL GEAR SOLID
    {
        name: `metal gear solid 5 phanton paint`,
        ima: `img/MGS5_Carátula.png`,
        link1: `res/mgs/mgs5googledrive.txt`,
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
    },
    // MORTAL KOMBAT
    {
        name: `mortal kombat 11`,
        ima: `img/mortal-kombat-11-ultimate-edition-cover-uut.jpg`,
        link1: `res/mortal kombat/mk11googledrive.txt`,
    },
    {
        name: `mortal kombat xl mortal kombat 10`,
        ima: `img/mkxl.jpg`,
        link1: `res/mortal kombat/mkxlgoogledrive.txt`,
    },
    {
        name: `mortal kombat komplete edition mortal kombat 9`,
        ima: `img/mk9.jpg`,
        link1: `res/mortal kombat/mk9googledrive.txt`,
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
    },
    {
        name: `need for speed payback nfs payback`,
        ima: `img/nfsPayback.jpg`,
        link1: `res/needForSpeed/nfspgoogledrive.txt`,
    },
    {
        name: `need for speed rivals nfs rivals`,
        ima: `img/descargar-Need-For-Speed-Rivals.jpg`,
        link1: `res/needForSpeed/nfsrgoogledrive.txt`,
    },
    {
        name: `need for speed most wanted nfs most wanted`,
        ima: `img/MW2012.jpg`,
        link1: `res/needForSpeed/nfsmw2googledrive.txt`,
    },
    {
        name: `need for speed the run nfs the run`,
        ima: `img/nfs-the-run-gen-packart.jpg`,
        link1: `res/needForSpeed/nfstrgoogledrive.txt`,
    },
    {
        name: `need for speed shift 2 nfs shift 2`,
        ima: `img/need-for-speed-shift-2-unleashed-gen-packart.jpg`,
        link1: `res/needForSpeed/nfss2googledrive.txt`,
    },
    {
        name: `need for speed hot pursuit nfs hot pursuit`,
        ima: `img/nfs-hot-pursuit-gen-packart.jpg`,
        link1: `res/needForSpeed/nfshpgoogledrive.txt`,
    },
    {
        name: `need for speed shift nfs shift`,
        ima: `img/Need_For_Speed_Shift_Portada.jpg`,
        link1: `res/needForSpeed/nfssgoogledrive.txt`,
    },
    {
        name: `need for speed undercover nfs undercover`,
        ima: `img/need-for-speed-undercover-cover.jpg`,
        link1: `res/needForSpeed/nfsugoogledrive.txt`,
    },
    {
        name: `need for speed carbono nfs carbono`,
        ima: `img/NFSCBoxArt.png`,
        link1: `res/needForSpeed/nfscgoogledrive.txt`,
    },
    {
        name: `need for speed most wanted nfs most wanted`,
        ima: `img/NFSMW_Boxart.jpg`,
        link1: `res/needForSpeed/nfsmwgoogledrive.txt`,
    },
    {
        name: `need for speed underground 2 nfs underground 2`,
        ima: `img/NFSUN2.jpg`,
        link1: `res/needForSpeed/nfsu2googledrive.txt`,
    },

    // RESIDENT EVIL
    {
        name: `resident evil 3 remake nemesis`,
        ima: `img/resident-evil-3-remake___Glb6Ejtf_720x0__1.jpg`,
        link1: `res/resident evil/re3rgoogledrive.txt`,
    },
    {
        name: `resident evil 2 remake`,
        ima: `img/resident-evil-2-remake-20191141048287_1.jpg`,
        link1: `res/resident evil/re2rgoogledrive.txt`,
    },
    {
        name: `resident evil 7 vii biohazard gold edition`,
        ima: `img/re7.jpg`,
        link1: `res/resident evil/re7googledrive.txt`,
    },
    {
        name: `resident evil zero 0 hd remaster`,
        ima: `img/rezero.jpg`,
        link1: `res/resident evil/rezgoogledrive.txt`,
    },
    {
        name: `resident evil revelations 2`,
        ima: `img/rer2.jpeg`,
        link1: `res/resident evil/rer2googledrive.txt`,
    },
    {
        name: `resident evil hd remaster`,
        ima: `img/resident-evil-hd-remaster-2015121151211_1.jpg`,
        link1: `res/resident evil/rehrgoogledrive.txt`,
    },
    {
        name: `resident evil 4 ultimate hd edition`,
        ima: `img/re4uhde.jpg`,
        link1: `res/resident evil/re4uhegoogledrive.txt`,
    },
    {
        name: `resident evil 6`,
        ima: `img/ResidentEvil6.jpg`,
        link1: `res/resident evil/re6googledrive.txt`,
    },
    {
        name: `resident evil operation raccoon city`,
        ima: `img/42546-resident-evil-operation-racoon-city-print.jpg`,
        link1: `res/resident evil/reorcgoogledrive.txt`,
    },
    {
        name: `resident evil revelations`,
        ima: `img/re-revelations-portada.jpg`,
        link1: `res/resident evil/rergoogledrive.txt`,
    },
    {
        name: `resident evil 5 gold edition`,
        ima: `img/re5-pic.jpg`,
        link1: `res/resident evil/re5googledrive.txt`,
    },


    // RED DEAD REDENTION 2
    {
        name: `red dead redention ii rdr 2`,
        ima: `img/Red-Dead-Redemption-2-Ultimate-Edition-PS4.jpg`,
        link1: `res/rdr2/rdr2googledrive.txt`,
    },
    // THE ELDER SCROLL
    {
        name: `the elder scroll skyrim special edition`,
        ima: `img/SKYRIM SPECIAL EDITION.jpg`,
        link1: `res/elder scroll/tess.txt`,
    },
    {
        name: `the elder scroll skyrim legenday edition`,
        ima: `img/skyrim legenday edition.jpg`,
        link1: `res/elder scroll/tessle.txt`,
    },
    {
        name: `the elder scroll oblivion game of the year`,
        ima: `img/oblivion.jpg`,
        link1: `res/elder scroll/teso.txt`,
    },
    {
        name: `the elder scroll morrowind game of the year`,
        ima: `img/morrowind.jpg`,
        link1: `res/elder scroll/tesm.txt`,
    },
    // TOMB RAIDER
    {
        name: `shadow of the tomb raider`,
        ima: `img/shadow-of-the-tomb-raider-cover.jpg`,
        link1: `res/tombraider/sottr.txt`,
    },
    {
        name: `rise of the tomb raider`,
        ima: `img/rotr.jpg`,
        link1: `res/tombraider/rotr.txt`,
    },
    // WATCH DOGS
    {
        name: `watch dogs`,
        ima: `img/wd1.jpg`,
        link1: `res/watch dogs/wd1.txt`,
    },
    {
        name: `watch dogs 2`,
        ima: `img/wd2.jpg`,
        link1: `res/watch dogs/wd2.txt`,
    },
]
