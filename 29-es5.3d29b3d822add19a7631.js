(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{C3MH:function(e,t,i){"use strict";i.r(t),t.default={notifications:{readll:"Tout marquer comme lu",deletll:"Supprimer tout",viewll:"Afficher toutes les notifications"},common:{or:"Ou",cancel:"Annuler",reset:"R\xe9initialiser",save:"Enregistrer",search:"Rechercher",edit:"Editer",remove:"Suppprimer",new:"Nouveau",export:"Exporter vers Excel",noDataToExport:"Aucune donn\xe9e \xe0 exporter",import:"Importer",discard:"Abandonner",yes:"Oui",no:"Non",pause:"Pause",areYouSure:"Vous \xeates s\xfbr?",view:"Afficher",destroy:"Supprimer",mustSelectARow:"Vous devez s\xe9lectionner une ligne",confirm:"Confirmer",start:"D\xe9but",end:"Fin",filters:"Filtres",information:"Informations",attachements:"Attachements",history:"Historique",addActivity:"Nouvelle activit\xe9",required:"Remplissez des champs obligatoires",ok:"Ok"},app:{title:"MIGRIGHTS"},entities:{informationCategory:{name:"Cat\xe9gorie d'informations",label:"Cat\xe9gories d'informations",menu:"Cat\xe9gories",exporterFileName:"Exporter les informations des cat\xe9gories",list:{menu:"Cat\xe9gories d'informations",title:"Cat\xe9gories d'informations"},create:{success:"Cat\xe9gorie enregistr\xe9e avec succ\xe8s"},update:{success:"Cat\xe9gorie enregistr\xe9e avec succ\xe8s"},destroy:{success:"Cat\xe9gorie supprim\xe9e avec succ\xe8s"},destroyAll:{success:"Cat\xe9gorie (s) supprim\xe9e (s) avec succ\xe8s"},edit:{title:"Modifier la cat\xe9gorie"},fields:{id:"Id",titleFR:"Titre en Fran\xe7ais",titleEN:"Titre en Anglais",titleAR:"Titre en Arabe",descriptionFR:"Description en Fran\xe7ais",descriptionEN:"Description en Anglais",descriptionAR:"Description en Arabe",addressFR:"Address en Fran\xe7ais",addressAR:"Address en Arabe",addressEN:"Address en Anglais",type:"Type",publish:"Publier",num_Tel:"Numero de telephone",site_web:"site Web",email:"Adresse e-mail",createdAt:"Cr\xe9\xe9 le",updatedAt:"Mis \xe0 jour le",createdAtRange:"Cr\xe9\xe9 le"},enumerators:{},new:{title:"Nouvelle cat\xe9gorie"},view:{title:"Voir la cat\xe9gorie"},importer:{title:"Importer des cat\xe9gories d'informations",fileName:"mod\xe8le d'importation de cat\xe9gorie d'informations",hint:"Les colonnes Fichiers / Images doivent \xeatre les URL des fichiers s\xe9par\xe9s par un espace."}},informations:{name:"informations",label:"Informations",menu:"Informations",exporterFileName:"Exporter des informations",list:{menu:"Informations",title:"Informations"},create:{success:"Informations enregistr\xe9es avec succ\xe8s"},update:{success:"Informations enregistr\xe9es avec succ\xe8s"},destroy:{success:"Informations supprim\xe9es avec succ\xe8s"},destroyAll:{success:"Informations supprim\xe9es avec succ\xe8s"},edit:{title:"Modifier les informations"},fields:{id:"Id",category:"Cat\xe9gorie",titleFR:"Titre en Fran\xe7ais",titreEN:"Titre en Anglais",titreAR:"Titre en Arabe",descriptionFR:"Description en Fran\xe7ais",descriptionEN:"Description en Anglais",descriptionAR:"Description en Arabe",addressFR:"Address en Fran\xe7ais",addressAR:"Address en Arabe",addressEN:"Address en Anglais",num_Tel:"Numero de telephone",site_web:"site Web",type:"Type",publish:"Publier",email:"Adresse e-mail",images:"Images",document:"Document",videos:"Vid\xe9os",googleMapsPosition:"Position sur Google Maps",tags:"Tags",createdAt:"Cr\xe9\xe9 le",updatedAt:"Mis \xe0 jour le",createdAtRange:"Cr\xe9\xe9 le"},enumerators:{type:{information:"Informations",news:"Actualit\xe9"},publish:{true:"Oui",false:"Non"}},new:{title:"Nouvelles informations"},view:{title:"Voir les informations"},importer:{title:"Importer des informations",fileName:"mod\xe8le d'importation d'informations",hint:"Les colonnes Fichiers / Images doivent \xeatre les URL des fichiers s\xe9par\xe9s par un espace."}},testimonyCategory:{name:"Cat\xe9gorie de t\xe9moignage",label:"Cat\xe9gories des t\xe9moignages",menu:"Cat\xe9gories",exporterFileName:"Cat\xe9gorie de t\xe9moignage d'exportation",list:{menu:"Cat\xe9gories des t\xe9moignages",title:"Cat\xe9gories des t\xe9moignages"},create:{success:"Cat\xe9gorie enregistr\xe9e avec succ\xe8s"},update:{success:"Cat\xe9gorie enregistr\xe9e avec succ\xe8s"},destroy:{success:"Cat\xe9gorie supprim\xe9e avec succ\xe8s"},destroyAll:{success:"Cat\xe9gorie (s) supprim\xe9e (s) avec succ\xe8s"},edit:{title:"Modifier la cat\xe9gorie"},fields:{id:"Id",titleFR:"Titre en Fran\xe7ais",titleEN:"Titre en Anglais",titleAR:"Titre en Arabe",descriptionFR:"Description en Fran\xe7ais",descriptionEN:"Description en Anglais",descriptionAR:"Description en Arabe",createdAt:"Cr\xe9\xe9 le",updatedAt:"Mis \xe0 jour le",createdAtRange:"Cr\xe9\xe9 le"},enumerators:{},new:{title:"Nouvelle cat\xe9gorie"},view:{title:"Voir la cat\xe9gorie"},importer:{title:"Importer des cat\xe9gories de t\xe9moignages",fileName:"Mod\xe8le d'importation de cat\xe9gorie de t\xe9moignage",hint:"Les colonnes Fichiers / Images doivent \xeatre les URL des fichiers s\xe9par\xe9s par un espace."}},activity:{name:"Activit\xe9",label:"Activit\xe9s",menu:"Activit\xe9s",exporterFileName:"Exporter l'acivit\xe9",list:{menu:"Activit\xe9s",title:"Activit\xe9s"},create:{success:"Activit\xe9 enregistr\xe9e avec succ\xe8s"},update:{success:"Activit\xe9 enregistr\xe9e avec succ\xe8s"},destroy:{success:"Activit\xe9 supprim\xe9e avec succ\xe8s"},destroyAll:{success:"Activit\xe9 (s) supprim\xe9e (s) avec succ\xe8s"},edit:{title:"Modifier l'activit\xe9"},fields:{id:"Id",date:"Date",comment:"Commentaire",images:"Images",audio:"Audio",documents:"Documents",video:"Vid\xe9o",position:"Position",createdAt:"Cr\xe9\xe9 le",updatedAt:"Mis \xe0 jour le",createdAtRange:"Cr\xe9\xe9 le"},enumerators:{},new:{title:"Nouveau Activit\xe9"},view:{title:"Voir Activit\xe9"},importer:{title:"Importer Activit\xe9s",fileName:"mod\xe8le d'importation d'activit\xe9",hint:"Les colonnes Fichiers / Images doivent \xeatre les URL des fichiers s\xe9par\xe9s par un espace."}},testimony:{name:"T\xe9moignage",label:"T\xe9moignages",menu:"T\xe9moignages",exporterFileName:"Exporter les T\xe9moignages",list:{menu:"T\xe9moignages",title:"T\xe9moignages"},create:{success:"T\xe9moignage enregistr\xe9 avec succ\xe8s"},update:{success:"T\xe9moignage enregistr\xe9 avec succ\xe8s"},destroy:{success:"T\xe9moignage supprim\xe9 avec succ\xe8s"},destroyAll:{success:"T\xe9moignage(s) supprim\xe9 (s) avec succ\xe8s"},edit:{title:"Editer T\xe9moignage"},fields:{id:"Id",category:"Cat\xe9gorie",title:"Titre",description:"Description",region:"R\xe9gion",testimonyType:"Type",status:"Statut",priority:"Priorit\xe9",assignedTo:"Assign\xe9 \xe0",images:"Images",audio:"Audio",documents:"Documents",videos:"Vid\xe9os",position:"Position",anonymous:"Anonyme",activity:"Activit\xe9",tags:"Tags",transferTo:"Transf\xe9rer \xe0",createdBy:"Cr\xe9\xe9 par",createdAt:"Cr\xe9\xe9 le",updatedAt:"Mis \xe0 jour le",createdAtRange:"Cr\xe9\xe9 le",contact:"Moyen de Communication"},enumerators:{region:{tunis:"Tunis",ariana:"Ariana",beja:"Beja",ben_arouss:"Ben Arous",bizerte:"Bizerte",gabes:"Gabes",gafsa:"Gafsa",jendouba:"Jendouba",kairouan:"Kairouan",kasserine:"Kasserine",kebili:"Kebili",kef:"Kef",mahdia:"Mahdia",manouba:"Manouba",medenine:"Medenine",monastir:"Monastir",nabeul:"Nabeul",sfax:"Sfax",sidi_bouzid:"Sidi Bouzid",siliana:"Siliana",sousse:"Sousse",tataouine:"Tataouine",tozeur:"Tozeur",zaghouan:"Zaghouan",null:"Aucune Region"},status:{waiting:"En attente",open:"En Cours",closed:"Ferm\xe9",canceled:"Annul\xe9"},priority:{low:"Faible",medium:"Moyenne",high:"Haute"},testimonyType:{testimony:"T\xe9moignage",assistance:"Assistance"}},new:{title:"Nouveau T\xe9moignage"},view:{title:"Voir T\xe9moignage"},importer:{title:"Importer T\xe9moignages",fileName:"Mod\xe8le d'importation de T\xe9moignage",hint:"Les colonnes Fichiers / Images doivent \xeatre les URL des fichiers s\xe9par\xe9s par un espace."}},tags:{name:"tags",label:"Tags",menu:"Tags",exporterFileName:"Exporter les Tags",list:{menu:"Tags",title:"Tags"},create:{success:"Tags enregistr\xe9 avec succ\xe8s"},update:{success:"Tags enregistr\xe9 avec succ\xe8s"},destroy:{success:"Tags supprim\xe9 avec succ\xe8s"},destroyAll:{success:"Tags(s) supprim\xe9 (s) avec succ\xe8s"},edit:{title:"Editer Tags"},fields:{id:"Id",titleFR:"Titre en Fran\xe7ais",titleEN:"Titre en Anglais",titleAR:"Titre en Arabe",createdAt:"Cr\xe9\xe9 le",updatedAt:"Mis \xe0 jour le",createdAtRange:"Cr\xe9\xe9 le"},enumerators:{},new:{title:"Nouveau Tag"},view:{title:"Voir le Tag"},importer:{title:"Importer Tags",fileName:"Mod\xe8le d'importation de Tags",hint:"Les colonnes Fichiers / Images doivent \xeatre les URL des fichiers s\xe9par\xe9s par un espace."}},partner:{name:"partenaire",label:"Partenaires",menu:"Partenaires",exporterFileName:"Exporter les partenaires",list:{menu:"Partenaires",title:"Partenaires"},create:{success:"Partenaire enregistr\xe9 avec succ\xe8s"},update:{success:"Partenaire enregistr\xe9 avec succ\xe8s"},destroy:{success:"Partenaire supprim\xe9 avec succ\xe8s"},destroyAll:{success:"Partenaire(s) supprim\xe9 avec succ\xe8s"},edit:{title:"Editer Partenaire"},fields:{id:"Id",category:"Cat\xe9gorie",title:"Titre",desription:"Desription",phone:"T\xe9l\xe9phone",mobile:"Mobile",address:"Adresse",email:"Email",createdAt:"Cr\xe9\xe9 le",updatedAt:"Mis \xe0 jour le",createdAtRange:"Cr\xe9\xe9 le"},enumerators:{},new:{title:"Nouveau Partenaire"},view:{title:"Voir Partenaire"},importer:{title:"Importer Partenaires",fileName:"Mod\xe8le d'importation des partenaires",hint:"Les colonnes Fichiers / Images doivent \xeatre les URL des fichiers s\xe9par\xe9s par un espace."}},partnerCategory:{name:"Cat\xe9gorie de partenaire",label:"Cat\xe9gories des Partenaires",menu:"Cat\xe9gories des Partenaires",exporterFileName:"Exporter les Cat\xe9gories des Partenaires",list:{menu:"Cat\xe9gories des Partenaires",title:"Cat\xe9gories des Partenaires"},create:{success:"Cat\xe9gorie de partenaire enregistr\xe9 avec succ\xe8s"},update:{success:"Cat\xe9gorie de partenaire enregistr\xe9 avec succ\xe8s"},destroy:{success:"Cat\xe9gorie de partenaire supprim\xe9 avec succ\xe8s"},destroyAll:{success:"Cat\xe9gorie de partenaire(s) supprim\xe9 avec succ\xe8s"},edit:{title:"Editer Cat\xe9gorie de partenaire"},fields:{id:"Id",titleFR:"Titre",description:"Description",createdAt:"Cr\xe9\xe9 le",updatedAt:"Mis \xe0 jour le",createdAtRange:"Cr\xe9\xe9 le"},enumerators:{},new:{title:"Nouvelle Cat\xe9gorie de partenaire"},view:{title:"Voir Cat\xe9gorie de partenaire"},importer:{title:"Importer Cat\xe9gorie de partenaires",fileName:"Mod\xe8le d'importation des cat\xe9gories des partenaires",hint:"Les colonnes Fichiers / Images doivent \xeatre les URL des fichiers s\xe9par\xe9s par un espace."}}},auth:{tenants:"Espaces de travail",profile:{title:"Profil",success:"Profil mis \xe0 jour avec succ\xe9s"},createAnAccount:"Cr\xe9er un compte",rememberMe:"Se souvenir du mot de passe",forgotPassword:"Votre mot de passe oubli\xe9",signin:"Ouvrir une session",signup:"S'inscrire",signout:"D\xe9connecter",alreadyHaveAnAccount:"Avez-vous d\xe9j\xe0 un compte? S'inscrire.",signinWithAnotherAccount:"Connectez-vous avec un autre compte",passwordChange:{title:"Changer le mot de passe",success:"Le mot de passe a \xe9t\xe9 chang\xe9 avec succ\xe8s",mustMatch:"les mots de passe doivent correspondre"},emailUnverified:{message:"Confirmez votre email \xe0 <strong>{0}</strong> pour continuer.",submit:"Renvoyer la v\xe9rification par e-mail"},emptyPermissions:{message:"Vous n'avez pas encore d'autorisations. Attendez que l'administrateur vous accorde des privil\xe8ges."},inactive:{message:"Votre compte est d\xe9sactiv\xe9, veuillez contacter l'administration."},passwordResetEmail:{message:"Envoyer un e-mail de r\xe9initialisation du mot de passe",error:"Email non reconnu"},passwordReset:{message:"R\xe9initialisez votre mot de passe"},emailAddressVoirificationEmail:{error:"Email non reconnu"},verificationEmailSuccess:"E-mail de v\xe9rification envoy\xe9 avec succ\xe8s",passwordResetEmailSuccess:"E-mail de r\xe9initialisation du mot de passe envoy\xe9 avec succ\xe8s",passwordResetSuccess:"Le mot de passe a \xe9t\xe9 chang\xe9 avec succ\xe8s",verifyEmail:{success:"Email v\xe9rifi\xe9 avec succ\xe8s.",message:"Un instant, votre email est en cours de v\xe9rification ..."}},tenant:{name:"tenant",label:"Espaces de travail",menu:"Espaces de travail",list:{menu:"Espaces de travail",title:"Espaces de travail"},create:{button:"Cr\xe9er un espace de travail",success:"L'espace de travail a bien \xe9t\xe9 enregistr\xe9"},update:{success:"L'espace de travail a bien \xe9t\xe9 enregistr\xe9"},destroy:{success:"L'espace de travail a bien \xe9t\xe9 supprim\xe9"},destroyAll:{success:"Espace (s) de travail supprim\xe9 avec succ\xe8s"},edit:{title:"Modifier l'espace de travail"},fields:{id:"Id",name:"Nombre",url:"URL",tenantName:"Nom de l'espace de travail",tenantId:"Espace de travail",tenantUrl:"URL de l'espace de travail",plan:"Plan"},enumerators:{},new:{title:"Nouvel espace de travail"},invitation:{view:"Voir les invitations",invited:"Invit\xe9",accept:"Accepter l'invitation",decline:"Refuser l'invitation",declined:"Invitation refus\xe9e avec succ\xe8s",acceptWrongEmail:"Acceptez l'invitation avec cet e-mail"},select:"S\xe9lectionnez l'espace de travail",validation:{url:"L'URL de votre espace de travail ne peut contenir que des lettres minuscules, des chiffres et des traits d'union (et doit commencer par une lettre ou un chiffre)."}},roles:{admin:{label:"Admin",description:"Full access to all business resources"},manager:{label:"Manager",description:"Manager de l'application"},member:{label:"Membre",description:"Membre de l'\xe9quipe Task-Force"},migrant:{label:"Migrant",description:"Migrant"}},user:{invite:"Invitation",title:"Utilisateurs",menu:"Utilisateurs",fields:{id:"Id",avatars:"Avatar",email:"Email",emails:"Email(s)",fullName:"Nom complet",firstName:"Pr\xe9nom",lastName:"Nom",status:"Statut",disabled:"D\xe9sactiv\xe9",phoneNumber:"Num\xe9ro de t\xe9l\xe9phone",nationality:"Nationalit\xe9",birthDate:"Date de naissance",role:"R\xf4le",createdAt:"Cr\xe9\xe9 le",updatedAt:"Mis \xe0 jour le",roleUser:"R\xf4le/Utilisateur",roles:"R\xf4les",createdAtRange:"Cr\xe9\xe9 le",password:"Mot de passe",rememberMe:"Se souvenir du mot de passe",oldPassword:"Mot de passe Ancien",newPassword:"Nouveau mot de passe",newPasswordConfirmation:"Confirmation du nouveau mot de passe"},enabled:"Activ\xe9e",disabled:"D\xe9sactiv\xe9",validations:{email:"Le courriel ${value} n'est pas valide"},disable:"D\xe9sactiver",enable:"Activer",doEnableSuccess:"Utilisateur activ\xe9 avec succ\xe8s",doDisableSuccess:"Utilisateur d\xe9sactiv\xe9 avec succ\xe8s",doDisableAllSuccess:"Utilisateur(s) d\xe9sactiv\xe9 avec succ\xe8s",doEnableAllSuccess:"Utilisateur(s) activ\xe9 (s) avec succ\xe8s",doAddSuccess:"Utilisateur(s) enregistr\xe9 (s) correctement",doUpdateSuccess:"Utilisateur enregistr\xe9 avec succ\xe8s",status:{active:"Actif",invited:"Invit\xe9","empty-permissions":"En attente de permission",inactive:"Inactif"},exporterFileName:"Exporter des utilisateurs",doDestroySuccess:"Utilisateur supprim\xe9 avec succ\xe8s",doDestroyAllSelectedSuccess:"Utilisateur(s) supprim\xe9 (s) avec succ\xe8s",edit:{title:"Modifier l'utilisateur"},new:{title:"Inviter des utilisateurs",titleModal:"Nouvel Utilisateur",emailsHint:"S\xe9parez les adresses e-mail par des virgules ',' ."},view:{title:"Voir Utilisateur",activity:"Activit\xe9"},importer:{title:"Importer Utilisateurs",fileName:"Mod\xe8le d'importation des utilisateurs",hint:"Les colonnes Fichiers / Images doivent \xeatre les URL des fichiers s\xe9par\xe9s par un espace. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio."},errors:{userAlreadyExists:"L'utilisateur avec cet e-mail existe d\xe9j\xe0",userNotFound:"Utilisateur introuvable",disablingHimself:"Vous ne pouvez pas d\xe9sactiver",revokingOwnPermission:"Vous ne pouvez pas r\xe9voquer votre propre autorisation d'administrateur"}},plan:{menu:"Plans",title:"Plans",free:{label:"Gratuit",price:"$0"},growth:{label:"Croissance",price:"$10"},enterprise:{label:"Entreprise",price:"$50"},pricingPeriod:"/mois",current:"Plan actuel",subscribe:"Souscrire",manage:"G\xe9rer l'abonnement",cancelAtPeriodEnd:"Ce plan sera annul\xe9 \xe0 la fin de la p\xe9riode.",somethingWrong:"Il y a un probl\xe8me avec votre abonnement.Acc\xe9dez \xe0 la gestion de l'abonnement pour plus de d\xe9tails.",notPlanUser:"Vous n'\xeates pas l'administrateur de cet abonnement.",demoHintHtml:'Astuce: utilisez ces <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">Cartes de Test</a> pour la d\xe9mo.'},auditLog:{menu:"Audit logs",title:"Audit logs",exporterFileName:"audit_log_export",entityNamesHint:"S\xe9parez les entit\xe9s par une virgule.",fields:{id:"Id",timestampRange:"P\xe9riode",entityName:"Entit\xe9",entityNames:"Entit\xe9s",entityId:"ID d'entit\xe9",action:"Action",values:"Valeurs",timestamp:"Date",createdByEmail:"E-mail de l'utilisateur"}},settings:{title:"Param\xe9tres",menu:"Param\xe9tres",save:{success:"Configuration enregistr\xe9e avec succ\xe8s. La page se rechargera dans {0} secondes pour que les modifications prennent effet."},fields:{theme:"Sujet",primaryColor:"Couleur primaire",secondaryColor:"Couleur secondaire",logos:"Logo",backgroundImages:"Image de fond"},colors:{default:"D\xe9faut",amber:"Ambre",blue:"bleu",cyan:"Cyan",deep_orange:"Orange intense",deep_purple:"Violet fonc\xe9",green:"Vert",indigo:"Indigo",light_blue:"Bleu clair",light_green:"Vert clair",lime:"Citron vert",orange:"Orang\xe9",pink:"Rose",purple:"Violet",red:"Rouge",teal:"Vert bleu\xe2tre",yellow:"Jaune",grey:"Gris",blue_grey:"Gris bleut\xe9",brown:"Marron"}},dashboard:{chart:{title:"Mon graphique",content:"Aucune donn\xe9e \xe0 afficher pour la p\xe9riode s\xe9lectionn\xe9e"},menu:"Tableau de bord",message:"Cette page utilise de fausses donn\xe9es \xe0 des fins de d\xe9monstration uniquement. Vous pouvez le modifier dans frontend/src/app/dashboard/components/dashboard.component.html",charts:{day:"Jour",red:"Rouge",green:"Vert",yellow:"Jaune",grey:"Gris",blue:"Bleu",orange:"Orang\xe9",months:{1:"Janvier",2:"F\xe9vrier",3:"Mars",4:"Avril",5:"Mai",6:"Juin",7:"Juillet",8:"Ao\xfbt",9:"Septembre",10:"Octobre",11:"Novembre",12:"D\xe9cembre"},eating:"En mangeant",drinking:"En buvant",sleeping:"En train de dormir",designing:"Conception",coding:"Codage",cycling:"Cyclisme",running:"Fonctionnement",customer:"Client"},text:{region:"Statistique des t\xe9moignages par R\xe9gion",assign:"Statistique des t\xe9moignages par membre",anonymous:"Statistique des t\xe9moignages par Anonyme",partenar:"Statistique des t\xe9moignages par Partenaire",status:"Statistique des t\xe9moignages par Statut",category:"Statistique des t\xe9moignages par Cat\xe9gorie"},status:{open:"En cours",closed:"Ferm\xe9",waitting:"En attente",canceled:"Annul\xe9"},priority:{low:"Faible",medium:"Moyenne",hight:"Haute"},assign:{save:"Attribuer cette t\xe2che pour moi ",view:"Cliquez pour afficher plus de d\xe9tails sur cette t\xe2che",cancel:"Revenir pour choisir une autre t\xe2che"}},errors:{403:"D\xe9sol\xe9, vous n'avez pas acc\xe8s \xe0 cette page",404:"D\xe9sol\xe9, la page que vous avez visit\xe9e n'existe pas",500:"D\xe9sol\xe9, le serveur signale une erreur",429:"Trop de demandes. Veuillez r\xe9essayer plus tard.",backToHome:"Revenir pour commencer",forbidden:{message:"Interdit"},validation:{message:"Une erreur s'est produite"},defaultErrorMessage:"Ops, une erreur s'est produite"},validation:{mixed:{default:"${path} n'est pas valide",required:"${path} est obligatoire",oneOf:"${path} doit \xeatre l'une des valeurs suivantes: ${values}",notOneOf:"${path} no doit \xeatre l'une des valeurs suivantes: ${values}"},string:{length:"${path} doit avoir exactement ${length} caract\xe8res",min:"${path} doit avoir au moins ${min} caract\xe8res",max:"${path} doit avoir au plus ${max} caract\xe8res",matches:'${path} doit correspondre \xe0 ce qui suit: "${regex}"',email:"${path} doit \xeatre un email valide",url:"${path} doit \xeatre une URL valide",trim:"${path} doit \xeatre une cha\xeene coup\xe9e",lowercase:"${path} doit \xeatre une cha\xeene en minuscules",uppercase:"${path} doit \xeatre une cha\xeene en majuscules",selected:"${path} doit \xeatre s\xe9lectionn\xe9"},number:{min:"${path} doit \xeatre sup\xe9rieur ou \xe9gal \xe0 ${min}",max:"${path} doit \xeatre inf\xe9rieur ou \xe9gal \xe0 ${max}",lessThan:"${path} doit \xeatre inf\xe9rieur \xe0 ${less}",moreThan:"${path} doit \xeatre sup\xe9rieur \xe0 ${more}",notEqual:"${path} ne doit pas \xeatre \xe9gal \xe0 ${notEqual}",positive:"${path} Doit \xeatre un nombre positif",negative:"${path} Doit \xeatre un nombre n\xe9gatif",integer:"${path} doit \xeatre un nombre entier"},date:{min:"La campagne ${path} doit \xeatre apr\xe8s ${min}",max:"La campagne ${path} doit \xeatre Ancien a ${max}"},boolean:{},object:{noUnknown:"La campagne ${path} ne peut pas avoir de cl\xe9s non sp\xe9cifi\xe9es dans la forme de l'objet"},array:{min:"La campagne ${path} doit avoir au moins ${min} \xe9l\xe9ments",max:"La campagne ${path} doit avoir des \xe9l\xe9ments inf\xe9rieurs ou \xe9gaux \xe0 ${max}"}},fileUploader:{upload:"Uploader",image:"Vous devez t\xe9l\xe9charger une image",size:"Le fichier est tr\xe8s volumineux. La taille maximale autoris\xe9e est {0}",formats:"Format invalide. Il doit \xeatre l'un des: {0}."},importer:{line:"Ligne",status:"Statut",pending:"En attente",imported:"Import\xe9",error:"Erreur",total:"{0} import\xe9, {1} en attente et {2} avec erreur",importedMessage:"Trait\xe9 {0} de {1}.",noNavigateAwayMessage:"Veuillez ne pas quitter cette page ou l'importation s'arr\xeatera.",completed:{success:"Importation termin\xe9e. Toutes les lignes ont \xe9t\xe9 import\xe9es avec succ\xe8s.",someErrors:"Traitement termin\xe9, mais certaines lignes n'ont pas pu \xeatre import\xe9es.",allErrors:"L'importation a \xe9chou\xe9. Il n'y a pas de lignes valides."},form:{downloadTemplate:"T\xe9l\xe9chargez le mod\xe8le",hint:"Cliquez ou faites glisser le fichier dans cette zone pour continuer."},list:{discardConfirm:"Vous \xeates s\xfbr? Les donn\xe9es non import\xe9es seront perdues."},errors:{invalidFileEmpty:"Le fichier est vide",invalidFileExcel:"Seuls les fichiers Excel (.Xlsx) sont autoris\xe9s",invalidFileUpload:"Fichier non valide. Assurez-vous que vous utilisez la derni\xe8re version du template.",importHashRequired:"Importer le hachage requis",importHashExistent:"Les donn\xe9es ont d\xe9j\xe0 \xe9t\xe9 import\xe9es"}},paginator:{itemsPerPageLabel:"Objets par page:",nextPageLabel:"Page suivante",previousPageLabel:"Page pr\xe9c\xe9dente ",firstPageLabel:"Premi\xe8re page",lastPageLabel:"Derni\xe8re page",getRangeLabel:{zero:"0 de {0}",interval:"{0} - {1} de {2}"}},datetime:{upSecondLabel:"Ajouter une seconde",downSecondLabel:"Moins une seconde",upMinuteLabel:"Ajouter une minute",downMinuteLabel:"Moins une minute",upHourLabel:"Ajouter une heure",downHourLabel:"Moins une heure",prevMonthLabel:"le mois pr\xe9c\xe9dent",nextMonthLabel:"Mois suivant",prevYearLabel:"L'ann\xe9e pr\xe9c\xe9dente ",nextYearLabel:"L'ann\xe9e prochaine",prevMultiYearLabel:"21 ann\xe9es pr\xe9c\xe9dentes",nextMultiYearLabel:"21 prochaines ann\xe9es",switchToMonthViewLabel:"Passer \xe0 la vue mensuelle",switchToMultiYearViewLabel:"Choisissez le mois et l'ann\xe9e",cancelBtnLabel:"Annuler",setBtnLabel:"Ensemble",rangeFromLabel:"De",rangeToLabel:"A",hour12AMLabel:"AM",hour12PMLabel:"PM"},table:{noData:"Aucune donn\xe9e",loading:"Chargement..."},autocomplete:{loading:"Chargement..."},imagesViewer:{noImage:"Sans image"},menu:{administration:"Administration",informations:"Informations",help:"Aide",assistance:"Assistance",testimony:"T\xe9moinages",common:"Partenaires"}}}}]);