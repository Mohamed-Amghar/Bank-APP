import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import {
  Button,
  useToast,
  Box,
  Center,
  NativeBaseProvider,
  SlideFade,
} from "native-base";

import FadeExample from "../Components/FAQ/compnentFAQ";

const FAQScreen = () => {
  return (
    <NativeBaseProvider>
      <Center backgroundColor={"#f7e6ff"}>
        <ScrollView>
          <FadeExample
            style={styles.all}
            title="Suite au refus de ma demande de contestation d'opération carte, je n'ai pas été remboursé(e). Que faire ?"
            jawab="Si votre demande de contestation carte a été refusée, vous pouvez éclaircir votre situation en prenant contact avec la Hello Team par téléphone ou par chat, ou en remplissant directement le formulaire de réclamation."
          />
          <FadeExample
            style={styles.all}
            title="Comment bénéficier d'un découvert sur mon compte courant ?"
            jawab="Pour bénéficier d'un découvert sur votre compte courant, Hello bank! vous propose des solutions de souplesse de trésorerie avec la facilité de caisse automatique.
La facilité de caisse (frais de mise en place : 28 euros par an*) : vous permet d'être débiteur dans la limite d'un montant personnalisé et pour une durée maximale de 15 jours consécutifs, par période de 30 jours, aux conditions d'intérêts stipulées dans les conditions de votre contrat. Vous bénéficiez par ailleurs d'une exonération des agios dans la limite d'un seuil qui dépend du montant de votre facilité de caisse (montant d'exonération indiqué dans les conditions de votre contrat).

Attention certaines offres Hello bank! ne proposent pas de facilité de caisse, comme l'offre de compte individuel Hello One.

Consulter les tarifs Hello bank! *Tenue de compte"
          />
          <FadeExample
            style={styles.all}
            title="Comment puis-je souscrire aux autres produits bancaires ou d'assurances Hello bank! et de la gamme BNP Paribas ?"
            jawab="Vous pouvez éditer un RIB : depuis votre Espace Client* sur le site hellobank.fr, en vous rendant dans la rubrique Mes comptes. Depuis l'entrée Mes avoirs dans le menu latéral, cliquez sur Editer un RIB.
depuis votre application Hello bank en cliquant sur Mes RIB et documents dans la rubrique Mon espace
Abonnement à des services de banque à distance Internet téléphone fixe SMS etc  gratuit et illimité hors coût de communication ou de fourniture daccès à Internet "
          />
          <FadeExample
            style={styles.all}
            title="Mon virement a été bloqué. Que faire ?"
            jawab="Si votre virement* a été bloqué faute de provisions, il vous suffit d'alimenter votre compte bancaire à la hauteur de l'opération et de contacter très rapidement un conseiller de la Hello Team, par chat ou par téléphone au 01 43 63 15 15 (appel non surtaxé).

Si le blocage de votre virement se manifeste par l’affichage d’un message d’erreur, essayez de vider les caches et de supprimer les cookies de votre navigateur, ou encore de changer de navigateur.

S’il s’agit d’un virement permanent, il vous suffit d'alimenter votre compte bancaire à hauteur de l’opération et la Hello Team fera automatiquement le nécessaire pour valider l’opération, sans que vous ayez besoin de la saisir à nouveau.


*Virement (cas d’un virement SEPA occasionnel)"
          />
          <FadeExample
            style={styles.all}
            title="Comment faire un virement unitaire depuis mon compte courant ?"
            jawab="Vous pouvez faire un virement en ligne depuis votre compte courant en vous rendant dans la rubrique Mes comptes de votre Espace Client* sur le site hellobank.fr, puis en sélectionnant Effectuer un virement dans l'entrée Mes avoirs. Vous pouvez également le faire depuis la rubrique Paiements de votre application Hello bank!*.

Bon à savoir : Pour effectuer un virement vers un bénéficiaire externe, vous devez au préalable l'ajouter dans votre liste de bénéficiaires, puis l'activer instantanément grâce à la Clé Digitale.


*Abonnement à des services de banque à distance (Internet, téléphone fixe, SMS, etc.) : gratuit et illimité, hors coût de communication ou de fourniture d’accès à Internet.
**Virement (cas d’un virement SEPA occasionnel)"
          />
          <FadeExample
            style={styles.all}
            title="Quels sont les tarifs des virements vers l'étranger ?"
            jawab="Le tarif d'un virement* à l'étranger est différent suivant:

le pays,
le montant,
la devise.
Vous pouvez retrouver le détail sur notre guide tarifaire.
*Virement (cas d’un virement SEPA occasionnel)"
          />
          <FadeExample
            style={styles.all}
            title="La carte VISA est-elle gratuite ?"
            jawab="La carte Hello One* est gratuite dans le cadre de l'offre Hello One et sa carte Visa associée.

La cotisation de la carte Hello Prime** souscrite dans le cadre de l'Offre Hello Prime est comprise dans la cotisation mensuelle de l'Offre Hello Prime. La cotisation de la carte Hello Prime** souscrite en dehors de l'offre Hello Prime est annuelle.

Pour plus d'informations sur le tarif de chacune des cartes bancaires Hello bank!, nous vous invitons à consulter le guide tarifaire.

*Fourniture d’une carte de débit (carte de paiement à autorisation systématique)
**Fourniture d’une carte de débit (carte de paiement international à débit immédiat), fourniture d’une carte de débit (carte de paiement international à débit différé)."
          />
          <FadeExample
            style={styles.all}
            title="Quand et comment vais-je recevoir ma carte bancaire ?"
            jawab="Vous recevrez la carte bancaire associée à votre offre, par courrier prioritaire quelques jours après l'ouverture de votre compte Hello bank!."
          />
          <FadeExample
            style={styles.all}
            title="Est-ce que je bénéficie de 2 cartes gratuites pour un compte joint ?
"
            jawab="Si vous ouvrez un compte commun avec votre conjoint, vous disposez de 2 cartes gratuites* sur le compte joint avec des retraits sans frais dans l'ensemble des distributeurs du réseau Global Alliance.


*Fourniture d’une carte de débit (carte de paiement internationale à débit différé), fourniture d’une carte de débit (carte de paiement internationale à débit immédiat), fourniture d’une carte de débit (carte de paiement à autorisation systématique)."
          />
          <FadeExample
            style={styles.all}
            title="Quelles sont les cartes bancaires disponibles ?
"
            jawab="Hello bank! propose des cartes bancaires adaptées à vos besoins et à votre situation, que vous souhaitiez ouvrir un compte individuel, un compte de dépôt joint ou un compte pour votre enfant mineur. Consultez ci-dessous l’ensemble des cartes bancaires pouvant être souscrites en ligne.

Si vous êtes majeur(e) et pour l'ouverture de votre compte de dépôt individuel , vous pouvez souscrire en ligne* :

La carte Visa Hello One** dans le cadre de l'offre Hello One ;
La carte Visa Hello Prime*** et sa carte virtuelle Hello Prime*** associée dans le cadre de l'offre Hello Prime ;
Si vous souhaitez gérer votre budget à deux, deux cartes bancaires sont disponibles à l’ouverture d’un compte joint en ligne.

Si vous souhaitez ouvrir un compte à un enfant mineur âgé de plus de 12 ans, vous pourrez lui choisir la Carte Visa Electron*.


*Sous réserve d'acceptation par la banque et selon conditions.
**Fourniture d’une carte de débit (carte de paiement à autorisation systématique).
***Fourniture d’une carte de débit (carte de paiement internationale à débit différé), Fourniture d’une carte de débit (carte de paiement internationale à débit immédiat."
          />
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
});

export default FAQScreen;
