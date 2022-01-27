define({
    // Video tab
    "_root_video_tab.name": "Video",
    "_root_video_adapterIndex.name": "Indice de GPU", // adv
    "_root_video_displayRefreshRate.name": "Taux de rafraîchissement",
    "_root_video_displayRefreshRate.description":
        "Taux de rafraîchissement à définir pour SteamVR et le casque simultanément. Un taux supérieur requiert un ordinateur plus performant. 72 Hz est le maximum pour le Quest 1.",
    "_root_video_preferredFps.name": "Taux de rafraîch. custom", // adv
    "_root_video_resolutionDropdown.name": "Résolution vidéo",
    "_root_video_resolutionDropdown.description":
        "100% est égal à la résolution native de Oculus Quest. \nAugmenter la résolution peut améliorer la qualité visuelle, mais ce n'est pas recommandé. \nBaisser la résolution en dessous de 100% peut réduire la latence et améliorer les performances réseau",
    "_root_video_renderResolution-choice-.name": "Résolution d'encodage vidéo", // adv
    "_root_video_renderResolution_scale-choice-.name": "Multiplication", // adv
    "_root_video_renderResolution_absolute-choice-.name": "Absolu", // adv
    "_root_video_renderResolution_scale.name": "Multiplicateur", // adv
    "_root_video_recommendedTargetResolution-choice-.name":
        "Résolution de rendu jeu", // adv
    "_root_video_recommendedTargetResolution_scale-choice-.name": "Multiplication", // adv
    "_root_video_recommendedTargetResolution_absolute-choice-.name": "Absolu", // adv
    "_root_video_recommendedTargetResolution_scale.name": "Multiplicateur", // adv
    "_root_video_secondsFromVsyncToPhotons.name": "Secondes de VSync à l'image", // adv
    "_root_video_secondsFromVsyncToPhotons.description":
        "Le temps entre le VSync virtuel et l'affichage de l'image à l'écran", // adv
    "_root_video_foveatedRendering.name": "Rendu fovéal",
    // "_root_video_foveatedRendering.description": use "_root_video_foveatedRendering_enabled.description"
    "_root_video_foveatedRendering_enabled.description":
        "Technique de rendu qui réduit la résolution de l'image à la vision périphérique pour réduire la charge de calcul de la carte graphique. Ceci produit une vidéo de plus petite résolution qui devra être transmise sur le réseau.",
        "_root_video_foveatedRendering_content_centerSizeX.name": "Largeur du centre",
        "_root_video_foveatedRendering_content_centerSizeX.description":
            "Largeur du centre non-compressé",
        "_root_video_foveatedRendering_content_centerSizeY.name": "Hauteur du centre",
        "_root_video_foveatedRendering_content_centerSizeY.description":
            "Hauteur du centre non-compressé",
        "_root_video_foveatedRendering_content_centerShiftX.name": "Décalage du centre horizontal",
        "_root_video_foveatedRendering_content_centerShiftX.description":
            "Un valeur supérieure bouge le centre non-compressé vers le milieu de votre vision",
        "_root_video_foveatedRendering_content_centerShiftY.name": "Décalage du centre vertical",
        "_root_video_foveatedRendering_content_centerShiftY.description":
            "Un valeur supérieure bouge le centre non-compressé vers le bas-fond de votre vision",
        "_root_video_foveatedRendering_content_edgeRatioX.name": "Taux de compression horiz.",
        "_root_video_foveatedRendering_content_edgeRatioX.description":
            "Intensité de compression des bords gauches et droites",
        "_root_video_foveatedRendering_content_edgeRatioY.name": "Taux de compression vert.",
        "_root_video_foveatedRendering_content_edgeRatioY.description":
            "Intensité de compression des bords haut et bas",
    "_root_video_colorCorrection.name": "Correction de couleurs",
    // "_root_video_colorCorrection.description": use "_root_video_colorCorrection_enabled.description"
    "_root_video_colorCorrection_enabled.description":
        "Les changements sont appliqués dans cet ordre : Netteté, Gamma, Luminosité, Contraste, Saturation. ",
    "_root_video_colorCorrection_content_brightness.name": "Luminosité",
    "_root_video_colorCorrection_content_brightness.description":
        "Luminosité: -1 donne une image noire et 1 donne une image blanche.",
    "_root_video_colorCorrection_content_contrast.name": "Contraste",
    "_root_video_colorCorrection_content_contrast.description":
        "Contraste: -1 donne une image au couleurs en niveaux de gris.",
    "_root_video_colorCorrection_content_saturation.name": "Saturation",
    "_root_video_colorCorrection_content_saturation.description":
        "Saturation: -1 donne une image en noir et blanc",
    "_root_video_colorCorrection_content_gamma.name": "Gamma",
    "_root_video_colorCorrection_content_gamma.description": 
        "Gamut: Définissez la valeur sur 2.2 pour corriger les couleurs sRGB en RGB. Ceci contrôle la luminosité sans changer les extrêmes de luminosité",
    "_root_video_colorCorrection_content_sharpening.name": "Netteté",
    "_root_video_colorCorrection_content_sharpening.description":
        "Netteté: -1 est le plus flou et 5 est le plus net",
    "_root_video_codec-choice-.name": "Codec vidéo",
    "_root_video_codec-choice-.description":
        "Prioritisez HEVC pour une meilleure qualité visuelle avec un débit plus bas. Les cartes graphiques AMD fonctionnent mieux avec HEVC.",
    "_root_video_codec_H264-choice-.name": "h264",
    "_root_video_codec_H264-choice-.description": "Utiliser le codec h264",
    "_root_video_codec_HEVC-choice-.name": "HEVC (h265)",
    "_root_video_codec_HEVC-choice-.description": "Utiliser le codec HEVC (h265)",
    "_root_video_clientRequestRealtimeDecoder.name":
        "Exiger une priorité de décodage realtime (client)", // adv
    "_root_video_use10bitEncoder.name": "Réduire le \"color banding\" (compatible GPU nVidia plus récents)",
    "_root_video_use10bitEncoder.description":
        "Ceci améliore la qualité visuelle en encodant une vidéo 10-bit par couleur au lieu de 8-bit",
    "_root_video_encodeBitrateMbs.name": "Débit video",
    "_root_video_encodeBitrateMbs.description":
        "Débit binaire du streaming video. 30Mbps est recommandé. \nUn débit plus élevé donne une meilleure image mais augmente la latence ainsi que le traffic réseau.",
    "_root_video_adaptiveBitrate.name": "Débit adaptif",
    "_root_video_adaptiveBitrate_enabled.description":
        "Utiliser la fréquence d'image ou une cible de latence personalisée pour ajuster le débit",
    "_root_video_adaptiveBitrate_content_bitrateMaximum.name": "Limite de débit",
    "_root_video_adaptiveBitrate_content_bitrateMaximum.description":
        "Le débit adaptif n'utilisera pas un débit supérieur à cette valeur",
    "_root_video_adaptiveBitrate_content_latencyTarget.name": "Cible de latence (us)", // adv
    "_root_video_adaptiveBitrate_content_latencyTarget.description":
        "Cette valeur sera utilisée comme cible de latence réseau si la fréquence d'image n'est pas utilisée", // adv
    "_root_video_adaptiveBitrate_content_latencyUseFrametime.name": "Utiliser fréq. image", // adv
    "_root_video_adaptiveBitrate_content_latencyUseFrametime_enabled.description":
        "Utilise la fréquence d'image par seconde comme cible de latence réseau", // adv
    "_root_video_adaptiveBitrate_content_latencyUseFrametime_content_latencyTargetMaximum.name":
        "Cible de latence max. (us)", // adv
    "_root_video_adaptiveBitrate_content_latencyUseFrametime_content_latencyTargetMaximum.description":
        "Le débit adaptif n'utilisera pas une cible de latence supérieure à cette limite si la fréq. d'image est utilisée", // adv
    "_root_video_adaptiveBitrate_content_latencyUseFrametime_content_latencyTargetOffset.name":
        "Décal. de cible de latence (us)", // adv
    "_root_video_adaptiveBitrate_content_latencyUseFrametime_content_latencyTargetOffset.description":
        "La cible de latence est décalée par cette valeur", // adv
    "_root_video_adaptiveBitrate_content_latencyThreshold.name": "Seuil de latence (us)", // adv
    "_root_video_adaptiveBitrate_content_latencyThreshold.description":
        "Le débit adaptif ajustera le débit quand la latence réseau franchit le seuil de latence", // adv
    "_root_video_adaptiveBitrate_content_bitrateUpRate.name": "Taux d'augment. débit", // adv
    "_root_video_adaptiveBitrate_content_bitrateUpRate.description":
        "Le taux d'augmentation de débit quand la latence réseau franchit le seuil de latence", // adv
    "_root_video_adaptiveBitrate_content_bitrateDownRate.name": "Taux de diminut. débit", // adv
    "_root_video_adaptiveBitrate_content_bitrateDownRate.description":
        "Le taux de diminution de débit quand la latence réseau franchit le seuil de latence", // adv
    "_root_video_adaptiveBitrate_content_bitrateLightLoadThreshold.name":
        "Seuil de débit en charge", // adv
    "_root_video_adaptiveBitrate_content_bitrateLightLoadThreshold.description":
        "Limite l'augmentation du débit si le taux d'envoi est dessous le seuil de débit. Évite les saccades causées lors d'un passage d'une scène simple à une scène complexe", // adv
    // Audio tab
    "_root_audio_tab.name": "Audio",
    "_root_audio_gameAudio.name": "Transmettre l'audio au casque",
    // "_root_audio_gameAudio.description": use "_root_audio_gameAudio_enabled.description"
    "_root_audio_gameAudio_enabled.description":
        "Périphérique audio utilisé pour capturer l'audio du jeu. Ceci est utilisé pour configurer la sortie audio de SteamVR.",
    "_root_audio_gameAudio_content_deviceDropdown.name": "Sélectionnez le périphérique audio",
    "_root_audio_gameAudio_content_deviceId-choice-.name": "Périphérique audio",
    "_root_audio_gameAudio_content_deviceId-choice-.name": "Audio device",
    "_root_audio_gameAudio_content_deviceId_default-choice-.name": "Par défaut", // adv
    "_root_audio_gameAudio_content_deviceId_name-choice-.name": "Par nom", // adv
    "_root_audio_gameAudio_content_deviceId_index-choice-.name": "Par index", // adv
    "_root_audio_gameAudio_content_muteWhenStreaming.name": "Couper la sortie audio pendant le streaming",
    "_root_audio_gameAudio_content_muteWhenStreaming.description":
        "Coupe la sortie audio (haut-parleurs/casque audio) pendant le streaming. Seul la sortie audio physique est coupée (pour éviter une sortie audio dédoublée), l'audio transmise au casque VR et à des programmes d'enregistrement sur l'ordinateur ne seront pas affectés.",
    "_root_audio_gameAudio_content_config.name": "Configuration",
    "_root_audio_gameAudio_content_config_averageBufferingMs.name": "Mémoire tampon (ms)",
    "_root_audio_gameAudio_content_config_averageBufferingMs.description":
        "Augmenter ceci peut réduire des saccades audio éventuelles.",
        "_root_audio_microphone.name": "Recevoir le micro du casque",
    // "_root_audio_microphone.description": use "_root_audio_microphone_enabled.description"
    "_root_audio_microphone_enabled.description":
        "Transmets le micro du casque à SteamVR. \nPour faire fonctionner ceci vous devez installer VB-CABLE Virtual Audio Device ou un logiciel équivalent.\nL'entrée microphone virtuel est pour le périphérique d'enregistrement, la sortie microphone virtuel est le périphérique de rendu audio, qui est utilisé pour configurer le micro dans SteamVR.",
    "_root_audio_microphone_content_inputDeviceDropdown.name":
        "Sélectionnez l'entrée microphone virtuel",
    "_root_audio_microphone_content_inputDeviceDropdown.description":
        "Le péripherique de sortie utilisé pour le rendu du son du micro.",
    "_root_audio_microphone_content_inputDeviceId-choice-.name": "Entrée microphone virtuel",
    "_root_audio_microphone_content_inputDeviceId_default-choice-.name": "Par défaut",
    "_root_audio_microphone_content_inputDeviceId_name-choice-.name": "Par nom",
    "_root_audio_microphone_content_inputDeviceId_index-choice-.name": "Par index",
    "_root_audio_microphone_content_outputDeviceDropdown.name":
        "Sélectionnez la sortie microphone virtuel",
    "_root_audio_microphone_content_outputDeviceDropdown.description":
        "Le péripherique d'entrée utilisé comme microphone. Ceci est utilisé pour configurer le périphérique du micro dans SteamVR.",
    "_root_audio_microphone_content_outputDeviceId-choice-.name": "Sortie microphone virtuel",
    "_root_audio_microphone_content_outputDeviceId_default-choice-.name": "Par défaut",
    "_root_audio_microphone_content_outputDeviceId_name-choice-.name": "Par nom",
    "_root_audio_microphone_content_outputDeviceId_index-choice-.name": "Par index",
    "_root_audio_microphone_content_config.name": "Configuration",
    "_root_audio_microphone_content_config_averageBufferingMs.name": "Mémoire tampon (ms)",
    "_root_audio_microphone_content_config_averageBufferingMs.description":
        "Augmenter ceci peut réduire des saccades audio éventuelles.",
    // Headset tab
    "_root_headset_tab.name": "Casque",
    "_root_headset_headsetEmulationMode.name": "Mode d'émul. casque",
    "_root_headset_headsetEmulationMode.description":
        "Émule différents casques VR pour une meilleure compatibilitée",
    "_root_headset_universeId.name": "Universe ID", // adv
    "_root_headset_serialNumber.name": "Numéro de série", // adv
    "_root_headset_serialNumber.description": "Numéro de série du casque émulé", // adv
    "_root_headset_trackingSystemName.name": "Nom du système de suivi", // adv
    "_root_headset_trackingSystemName.description":
        "Nom du système de suivi du casque émulé", // adv
    "_root_headset_modelNumber.name": "Numéro de modèle", // adv
    "_root_headset_modelNumber.description": "Numéro de modèle du casque émulé", // adv
    "_root_headset_driverVersion.name": "Version de pilote", // adv
    "_root_headset_driverVersion.description": "Version de pilote du casque émulé", // adv
    "_root_headset_manufacturerName.name": "Nom du fabricant", // adv
    "_root_headset_manufacturerName.description": "Nom du fabricant du casque émulé", // adv
    "_root_headset_renderModelName.name": "Nom du modèle de rendu", // adv
    "_root_headset_renderModelName.description": "Nom du modèle de rendu du casque émulé", // adv
    "_root_headset_registeredDeviceType.name": "Type de casque enregistré", // adv
    "_root_headset_registeredDeviceType.description":
        "Type de casque enregistré du casque émulé", // adv
    "_root_headset_trackingFrameOffset.name": "Décalage de suivi temporel",
    "_root_headset_trackingFrameOffset.description": "Décalage pour l'algorithme de prédiction de suivi",
    "_root_headset_positionOffset.name": "Décalage de position du casque", // adv
    "_root_headset_positionOffset.description":
        "Décalage de position du casque pour l'algorithme de prédiction de suivi positionel.", // adv
    "_root_headset_positionOffset_0.name": "X", // adv
    "_root_headset_positionOffset_1.name": "Y", // adv
    "_root_headset_positionOffset_2.name": "Z", // adv
    "_root_headset_force3dof.name": "Forcer 3Dof",
    "_root_headset_force3dof.description":
        "Force le mode 3 degrees of freedom (comme Oculus Go)",
    "_root_headset_trackingRefOnly.name": "Suivi seulement",
    "_root_headset_trackingRefOnly.description":
        "Désactive tout encodage/streaming vidéo et traite le casque comme un tracking reference OpenVR au lieu d'être le casque SteamVR principal. Ceci peut être utilisé pour se servir du casque et des manettes d'ALVR comme des full-body trackers, comme des manettes alternatives pour d'autres casque VR, pour le débogage, etc.",
    "_root_headset_enableViveTrackerProxy.name": "Vive Tracker Proxy",
    "_root_headset_enableViveTrackerProxy.description":
        "Spawns un Vive Tracker proxy qui copie la position et l'orientation du casque d'ALVR. Ceci peut servir pour faire du casque d'ALVR un tracker des hanches dans le full-body tracking ou juste un tracker générique dans les applications qui le sont compatible.",
    "_root_headset_controllers.name": "Manettes",
    // "_root_headset_controllers.description": use "_root_headset_controllers_enabled.description"
    "_root_headset_controllers_enabled.description": "Permettre l'utilisation de manettes",
    "_root_headset_controllers_content_controllerMode.name": "Mode d'émul. manette",
    "_root_headset_controllers_content_controllerMode.description":
        "Émule différents manettes pour une meilleure compatibilitée ou permettre le suivi des mains",
    "_root_headset_controllers_content_modeIdx.name": "Index de mode", // adv
    "_root_headset_controllers_content_modeIdx.description":
        "Index de mode des manettes émulées", // adv
    "_root_headset_controllers_content_trackingSystemName.name": "Nom du système de suivi", // adv
    "_root_headset_controllers_content_trackingSystemName.description":
        "Nom du système de suivi des manettes émulées", // adv
    "_root_headset_controllers_content_manufacturerName.name": "Nom du fabricant", // adv
    "_root_headset_controllers_content_manufacturerName.description":
        "Nom du fabricant des manettes émulées", // adv
    "_root_headset_controllers_content_modelNumber.name": "Numéro de modèle", // adv
    "_root_headset_controllers_content_modelNumber.description":
        "Numéro de modèle des manettes émulées", // adv
    "_root_headset_controllers_content_renderModelNameLeft.name": "Numéro de modèle (Left hand)", // adv
    "_root_headset_controllers_content_renderModelNameLeft.description":
        "Numéro de modèle de la manette gauche émulée", // adv
    "_root_headset_controllers_content_renderModelNameRight.name": "Numéro de modèle (Right hand)", // adv
    "_root_headset_controllers_content_renderModelNameRight.description":
        "Numéro de modèl de la manette droite émulée", // adv
    "_root_headset_controllers_content_serialNumber.name": "Numéro de série", // adv
    "_root_headset_controllers_content_serialNumber.description":
        "Numéro de série des manettes émulées", // adv
    "_root_headset_controllers_content_ctrlTypeLeft.name": "Type man. gauche", // adv
    "_root_headset_controllers_content_ctrlTypeLeft.description":
        "Type de la manette gauche émulée", // adv
    "_root_headset_controllers_content_ctrlTypeRight.name": "Type man. droite", // adv
    "_root_headset_controllers_content_ctrlTyperight.description":
        "Type de la manette droite émulée", // adv
    "_root_headset_controllers_content_registeredDeviceType.name": "Type de manettes enregistré", // adv
    "_root_headset_controllers_content_registeredDeviceType.description":
        "Type de manettes enregistré des manettes émulées", // adv
    "_root_headset_controllers_content_inputProfilePath.name": "Chemin de profil d'entrée", // adv
    "_root_headset_controllers_content_inputProfilePath.description":
        "Chemin de profil d'entrée des manettes émulées", // adv
    // All the best to whoever has the motivation to complete this translation !
    // "_root_headset_controllers_content_useHeadsetTrackingSystem.name":
    //     "Use Headset Tracking System",
    // "_root_headset_controllers_content_useHeadsetTrackingSystem.description":
    //     "Overrides the current controller profile's tracking system name with the current ALVR HMD's tracking system. Enable this in cases such as space calibration with OpenVR space calibrator.",
    // "_root_headset_controllers_content_trackingSpeed.name": "Tracking speed",
    // "_root_headset_controllers_content_trackingSpeed.description":
    //     "Recommended to use adaptive Oculus or SteamVR prediction. If you want to use fixed tracking speeds: Medium or fast for fast paced games like Beatsaber, normal for slower games like Skyrim. \nOculus prediction means controller position is predicted on the headset instead of on the PC through SteamVR.",
    // "_root_headset_controllers_content_poseTimeOffset.name": "Pose time offset", // adv
    // "_root_headset_controllers_content_poseTimeOffset.description":
    //     "Offset for the pose prediction algorithm", // adv
    // "_root_headset_controllers_content_clientsidePrediction.name":
    //     "Adaptive prediction (Client)", // adv
    // "_root_headset_controllers_content_clientsidePrediction.description":
    //     "Use adaptive prediction from the headset", // adv
    // "_root_headset_controllers_content_serversidePrediction.name":
    //     "Adaptive prediction (Server)", // adv
    // "_root_headset_controllers_content_serversidePrediction.description":
    //     "Use adaptive prediction from the server. \nAllows using prediction cutoffs to reduce jittering with slow or precise movements", // adv
    // "_root_headset_controllers_content_linearVelocityCutoff.name":
    //     "Linear velocity cutoff (m/s)", // adv
    // "_root_headset_controllers_content_linearVelocityCutoff.description":
    //     "Prediction cutoff for linear velocity", // adv
    // "_root_headset_controllers_content_linearAccelerationCutoff.name":
    //     "Linear acceleration cutoff (m/s^2)", // adv
    // "_root_headset_controllers_content_linearAccelerationCutoff.description":
    //     "Prediction cutoff for linear acceleration", // adv
    // "_root_headset_controllers_content_angularVelocityCutoff.name":
    //     "Angular velocity cutoff (deg/s)", // adv
    // "_root_headset_controllers_content_angularVelocityCutoff.description":
    //     "Prediction cutoff for angular velocity", // adv
    // "_root_headset_controllers_content_angularAccelerationCutoff.name":
    //     "Angular acceleration cutoff (deg/s^2)", // adv
    // "_root_headset_controllers_content_angularAccelerationCutoff.description":
    //     "Prediction cutoff for angular velocity", // adv
    // "_root_headset_controllers_content_positionOffsetLeft.name": "Position offset", // adv
    // "_root_headset_controllers_content_positionOffsetLeft.description":
    //     "Position offset in meters for the left controller. \nFor the right controller, x value is mirrored", // adv
    // "_root_headset_controllers_content_positionOffsetLeft_0.name": "X", // adv
    // "_root_headset_controllers_content_positionOffsetLeft_1.name": "Y", // adv
    // "_root_headset_controllers_content_positionOffsetLeft_2.name": "Z", // adv
    // "_root_headset_controllers_content_rotationOffsetLeft.name": "Rotation offset", // adv
    // "_root_headset_controllers_content_rotationOffsetLeft.description":
    //     "Rotation offset in degrees for the left controller. \nFor the right controller, rotations along the Y and Z axes are mirrored", // adv
    // "_root_headset_controllers_content_rotationOffsetLeft_0.name": "X", // adv
    // "_root_headset_controllers_content_rotationOffsetLeft_1.name": "Y", // adv
    // "_root_headset_controllers_content_rotationOffsetLeft_2.name": "Z", // adv
    // "_root_headset_controllers_content_hapticsIntensity.name": "Haptics intensity",
    // "_root_headset_controllers_content_hapticsIntensity.description":
    //     "Factor to reduce or increase the intensity of the vibration of the controls.",
    // "_root_headset_controllers_content_hapticsAmplitudeCurve.name": "Haptics amplitude curve",
    // "_root_headset_controllers_content_hapticsAmplitudeCurve.description":
    //     "Increase to make lower amplitudes stronger",
    // "_root_headset_controllers_content_hapticsMinDuration.name": "Haptics minimum duration", // adv
    // "_root_headset_controllers_content_hapticsMinDuration.description":
    //     "Minimum duration of any haptic event. \nIncrease the duration if haptic pulses feel too short or weak", // adv
    // "_root_headset_controllers_content_hapticsLowDurationAmplitudeMultiplier.name":
    //     "Short haptics amplitude multiplier", // adv
    // "_root_headset_controllers_content_hapticsLowDurationAmplitudeMultiplier.description":
    //     "Amplitude multiplier for short haptic pulses. \nIncrease the multiplier if haptic pulses feel too weak", // adv
    // "_root_headset_controllers_content_hapticsLowDurationRange.name": "Short haptics range", // adv
    // "_root_headset_controllers_content_hapticsLowDurationRange.description":
    //     "Duration range for haptic pulses where intensity should be increased. \nIncrease the range if slightly longer haptic pulses feel too weak", // adv
    // "_root_headset_trackingSpace-choice-.name": "Tracking Space",
    // "_root_headset_trackingSpace-choice-.description":
    //     "Sets what the headset uses as its reference for tracking and how the center of the space is defined. Stage tracking space behaves like a wired headset: the center of the space stays in one place after recentering the headset. This must be set if you want to use Vive trackers.",
    // "_root_headset_trackingSpace_local-choice-.name": "Local (Headset centered)",
    // "_root_headset_trackingSpace_stage-choice-.name": "Stage (Room centered)",
    // Connection tab
    "_root_connection_tab.name": "Connection",
    "_root_connection_autoTrustClients.name": "Approuver clients automatiquement (pas recommandé)", // adv
    "_root_connection_webServerPort.name": "Port du serveur web",
    "_root_connection_streamProtocol-choice-.name": "Protocol de streaming",
    "_root_connection_streamProtocol-choice-.description":
        "Protocole réseau utilisé pour envoyer des données entre client et serveur. UDP fonctionne mieux à bas débit (<30), UDP Limité fonctionne mieux à débit moyens (~100), TCP fonctionne à tout débit.",
    "_root_connection_streamProtocol_udp-choice-.name": "UDP",
    "_root_connection_streamProtocol_throttledUdp-choice-.name": "UDP Limité",
    "_root_connection_streamProtocol_tcp-choice-.name": "TCP",
    "_root_connection_streamPort.name": "Port de streaming serveur", // adv
    "_root_connection_streamPort.description": "Port utilisé par le serveur pour recevoir des paquets.", // adv
    "_root_connection_aggressiveKeyframeResend.name": "Envoi d'image-clés aggressif",
    "_root_connection_aggressiveKeyframeResend.description":
        "Baisse l'intervale minimum entre image-clés de 100 ms à 5 ms. \nSeulement utilisé quand une perte de paquets est détectée. \nAméliore l'expérience sur les réseaux susceptibles à perdre des paquets.",
    "_root_connection_onConnectScript.name": "Script pendant connexion",
    "_root_connection_onConnectScript.description":
        "Ce script/fichier exécutable sera exécuté de manière asynchrone quand le casque se connecte.\nLa variable d'environnment ACTION sera définie sur &#34;connect&#34; (sans guillemets).",
    "_root_connection_onDisconnectScript.name": "Script pendant déconnexion",
    "_root_connection_onDisconnectScript.description":
        "Ce script/fichier exécutable sera exécuté de manière asynchrone quand le casque se déconnecte et quand SteamVR s'éteint.\nLa variable d'environnment ACTION sera définie sur &#34;disconnect&#34; (sans guillemets).",
    // Extra tab
    "_root_extra_tab.name": "Extra",
    "_root_extra_theme-choice-.name": "Thème",
    "_root_extra_theme-choice-.description": "Rejoins le Côté Obscur.\nOn a des cookies.",
    "_root_extra_theme_systemDefault-choice-.name": "Système",
    "_root_extra_theme_classic-choice-.name": "Classique",
    "_root_extra_theme_darkly-choice-.name": "Sombreux",
    "_root_extra_clientDarkMode.name": "Mode sombre Client",
    "_root_extra_clientDarkMode.description": "Appliqué après connexion et cycle veille-réveil",
    "_root_extra_revertConfirmDialog.name": "Confirmer restauration",
    "_root_extra_revertConfirmDialog.description":
        "Demande une confirmation avant de restaurer un paramètre à sa valeur par-défaut",
    "_root_extra_restartConfirmDialog.name": "Confirmer redémarrage SteamVR",
    "_root_extra_promptBeforeUpdate.name": "Demander avant de mettre à jour",
    "_root_extra_updateChannel-choice-.name": "Canal de MàJ",
    "_root_extra_updateChannel_noUpdates-choice-.name": "Aucun",
    "_root_extra_updateChannel_stable-choice-.name": "Stable",
    "_root_extra_updateChannel_beta-choice-.name": "Beta",
    "_root_extra_updateChannel_nightly-choice-.name": "Nightly",
    "_root_extra_logToDisk.name": "Enregister log sur disque dur (session_log.txt)",
    "_root_extra_notificationLevel-choice-.name": "Niveau de notification", // adv
    "_root_extra_notificationLevel-choice-.description":
        "A quel niveau les notifications seront générées. De moins à plus détailé: \n- Error \n- Warning \n- Informations \n- Debug", // adv
    "_root_extra_notificationLevel_error-choice-.name": "Error", // adv
    "_root_extra_notificationLevel_warning-choice-.name": "Warning", // adv
    "_root_extra_notificationLevel_info-choice-.name": "Information", // adv
    "_root_extra_notificationLevel_debug-choice-.name": "Debug", // adv
    "_root_extra_excludeNotificationsWithoutId.name":
        "Exclure notifications sans identification", // adv
    "_root_extra_excludeNotificationsWithoutId.description":
        "Ne pas afficher des notifications qui ne contiennent pas la structure d'identification.", // adv
    // Others
    steamVRRestartSuccess: "SteamVR redémarré avec succès",
    audioDeviceError: "Aucun péripherique audio trouvé. Stream audio ou microphone impossible",
});
