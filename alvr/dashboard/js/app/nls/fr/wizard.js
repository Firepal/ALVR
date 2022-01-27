define({
    // Banner
    title: "Bienvenue sur ALVR",
    subtitle: "Cet assistant va vous aider à configurer ALVR",
    // Hardware page
    titleHardwareReq: "Matériel requis",
    textHardwareReq:
        "ALVR nécessite une carte graphique dédiée et récente (Intel HD graphics non supporté). Voici une <a target= '_blank' href='https://github.com/polygraphene/ALVR/wiki/Supported-GPU'>liste de GPU supporté</a>. <br/> <br/> Assurez vous d'avoir au moins une sortie audio. <br/> <br/> ",
        YourGPUIs: "Votre GPU:",
        GPUSupported: " \nGénial! Cette carte graphique est probablement compatible!",
        GPUUnsupported:
            " \nNous sommes désolés, mais ce GPU peut être incompatible. Vous pouvez quand-même essayer ALVR et vérifier si ça marche",
    // Software page
    titleSoftwareReq: "Logiciels requis",
    textSoftwareReq:
        "Pour transmettre le microphone du casque veuillez installer <a target= '_blank' href='https://www.vb-audio.com/Cable/'>VB-Audio Virtual Cable</a>.",
    // Firewall page
    titleFirewall: "Pare-feu",
    textFirewall:
        "Pour communiquer avec le casque, quelques règles de pare-feu doivent être ajoutées. <b>Cela nécessite les droits administrateur!</b>",
    buttonFirewall: "Appliquer règles de pare-feu",
    firewallFailed: "Erreur d'application des règles du pare-feu",
    firewallSuccess: "Règles du pare-feu appliquées avec succès",
    // Tracking page
    titleTracking: "Suivi",
    textTracking:
    "Quel mode de prédiction voulez-vous pour le suivi des manettes? Il est recommandé d'utiliser Oculus ou SteamVR. Si vous voulez utiliser les vitesses fixe: Medium ou Fast pour des jeux frénetiques comme Beat Saber, Normal pour des jeux plus aisé comme Skyrim. <br/> <br/> La \"prédiction Oculus\" veut dire que la position des manettes est prédit par le casque VR au lieu de SteamVR sur le PC.",
    oculusTracking: "Oculus",
    steamvrTracking: "SteamVR",
    normalTracking: "Normal",
    mediumTracking: "Medium",
    fastTracking: "Fast",
    // Performance page
    titlePerformance: "Préréglage de perf.",
    textPerformance:
        "Veuillez choisir un préréglage qui convient à votre setup. Nous ajusterons quelque paramètres pour vous.",
    compatPerformance: "Compatibilité",
    qualityPerformance: "Qualité visuelle",
    // Import page
    titleImport: "Importer préréglage ALVR",
    textImport:
        "Vous pouvez importer des fichiers de préréglages (.json): <ul><li> Des préréglages pour un casque en particulier. <li> Des paramètres d'une ancienne installation d'ALVR (<code>session.json</code>).<ul>",
    // End page
    titleFinished: "Terminé",
    textFinished:
        "Vous pourrez toujours relancer cet assistant depuis l'onglet \"Installation\" sur la gauche.",
    buttonBack: "Retour",
    buttonNext: "Suivant",
    buttonClose: "Fermer"
});
