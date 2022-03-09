import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import ComptesStack from "./comptesNav";
import FinancementStack from "./FinanceNav";
import VermentStack from "./VermentNav";

import BenefecaireStack from "./BeneficiariesNavigation";
import ChequeStack from "./chequeNav";
import AssistanceStack from "./assistanceNav";
import StatisticsStack from "./statisticsNav";
import DocumentsStack from "./documentsNav";
import AgencesStack from "./agencesNAv";
import FAQStack from "./FAQNav";
import AccueilStack from "./accueilNav";

const RootDrawerNav = createDrawerNavigator({
  Accuiel: {
    screen: AccueilStack,
  },
  comptes: {
    screen: ComptesStack,
  },
  Verment: {
    screen: VermentStack,
  },
  Financement: {
    screen: FinancementStack,
  },
  Bénefécaire: {
    screen: BenefecaireStack,
  },
  cheque: {
    screen: ChequeStack,
  },
  Assistance: {
    screen: AssistanceStack,
  },
  Statistics: {
    screen: StatisticsStack,
  },
  Documents: {
    screen: DocumentsStack,
  },
  Agences: {
    screen: AgencesStack,
  },
  FAQ: {
    screen: FAQStack,
  },
});

export default createAppContainer(RootDrawerNav);
