import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import Trending from './pages/Trending';
import { FaqWithImage } from './pages/faq/FaqWithImage';
import { FeaturesCards } from './pages/about/FeaturesCards';
import Lokalet from './pages/Lokalet';
import LandingPage from './pages/LandingPage';

import Home from './pages/Home';
import CompanyPage from './pages/CompanyPage';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsAndContitions } from './pages/legal/TermsAndConditions';
import CompanyPageApi from './pages/CompanyPageApi';
import BrregCompany from './components/carousel/BrregCompany';
import Users from './components/dashboard/updateDB/users/Users';
import { Create } from './pages/account/Create';
import { Login } from './pages/account/Login';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Unauthorized from './pages/errorPages/Unauthorized';
import Error404 from './pages/errorPages/error404';
import UpdateCompany from './components/dashboard/updateDB/company/UpdateCompany';
import { Logout } from './pages/account/Logout';
import UsersEditable from './components/dashboard/updateDB/users/UsersEditable';

const ROLES = {
  "ADMIN": 5673,
  "EDITOR": 1903,
  "USER": 2007,
};


function App() {
  const [colorScheme, setColorScheme] = useState("light")
  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >

        <Routes>
          <Route exact path="/" element={<Layout />} >

            {/* public routes */}
            <Route exact path="/" element={ <LandingPage /> } />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/register" element={<Create />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/faq" element={<FaqWithImage />} />
            <Route exact path="/about" element={<FeaturesCards />} />
            <Route exact path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route exact path="/terms_conditions" element={<TermsAndContitions />} />
            <Route exact path="/unauthorized" element={<Unauthorized />} />
            <Route exact path="/trending" element={<Trending />} />
            <Route exact path="/local" element={<Lokalet />} />


            {/* protected routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
              <Route exact path="/lokale_ditt" element={<Trending />} />
              <Route exact path="/din_by" element={<Trending />} />
              <Route exact path="/nabobyen" element={<Trending />} />
              <Route exact path="/grunderiet" element={<Trending />} />
              <Route exact path="/leverandør_liste" element={<Trending />} />
              <Route exact path="/hobbyster" element={<Trending />} />
              <Route exact path="/turist_reise" element={<Trending />} />
              <Route exact path="/lokale_anmeldelser" element={<Trending />} />
              <Route exact path="/sport" element={<Trending />} />
              <Route exact path="/bibliotek" element={<Trending />} />
              <Route exact path="/mæteplassen" element={<Trending />} />
              <Route exact path="/lokale_ditt" element={<Trending />} />
              <Route exact path="/din_by" element={<Trending />} />
              <Route exact path="/nabobyen" element={<Trending />} />
              <Route exact path="/grunderiet" element={<Trending />} />
              <Route exact path="/leverandør_liste" element={<Trending />} />
              <Route exact path="/hobbyster" element={<Trending />} />
              <Route exact path="/turist_reise" element={<Trending />} />
              <Route exact path="/lokale_anmeldelser" element={<Trending />} />
              <Route exact path="/sport" element={<Trending />} />
              <Route exact path="/bibliotek" element={<Trending />} />
              <Route exact path="/mæteplassen" element={<Trending />} />
              <Route exact path="/kampanjer" element={<Trending />} />
              <Route exact path="/markedsplass" element={<Trending />} />
              <Route exact path="/salg" element={<Trending />} />
              <Route exact path="/lokale_tilbud" element={<Trending />} />
              <Route exact path="/handeltorget" element={<Trending />} />
              <Route exact path="/firma_tilbud" element={<Trending />} />
              <Route exact path="/opplagstavler" element={<Trending />} />
              <Route exact path="/kjop_salg_utleie" element={<Trending />} />
              <Route exact path="/sammedags_levering" element={<Trending />} />
              <Route exact path="/hjemlevering" element={<Trending />} />
              <Route exact path="/publiser_annons" element={<Trending />} />
              <Route exact path="/kampanjer" element={<Trending />} />
              <Route exact path="/markedsplass" element={<Trending />} />
              <Route exact path="/salg" element={<Trending />} />
              <Route exact path="/lokale_tilbud" element={<Trending />} />
              <Route exact path="/handeltorget" element={<Trending />} />
              <Route exact path="/firma_tilbud" element={<Trending />} />
              <Route exact path="/opplagstavler" element={<Trending />} />
              <Route exact path="/kjop_salg_utleie" element={<Trending />} />
              <Route exact path="/sammedags_levering" element={<Trending />} />
              <Route exact path="/hjemlevering" element={<Trending />} />
              <Route exact path="/publiser_annons" element={<Trending />} />
              <Route exact path="/næringsforum" element={<Trending />} />
              <Route exact path="/ekspert_liste" element={<Trending />} />
              <Route exact path="/oppmuntring" element={<Trending />} />
              <Route exact path="/klubb" element={<Trending />} />
              <Route exact path="/inspirasjon" element={<Trending />} />
              <Route exact path="/be_&_eller_tylby_hjelp" element={<Trending />} />
              <Route exact path="/diskusjoner" element={<Trending />} />
              <Route exact path="/lokalet_forum" element={<Trending />} />
              <Route exact path="/del_kunskapp" element={<Trending />} />
              <Route exact path="/dugnad_&_frivillig" element={<Trending />} />
              <Route exact path="/kunskap_bygging" element={<Trending />} />
              <Route exact path="/næringsforum" element={<Trending />} />
              <Route exact path="/ekspert_liste" element={<Trending />} />
              <Route exact path="/oppmuntring" element={<Trending />} />
              <Route exact path="/klubb" element={<Trending />} />
              <Route exact path="/inspirasjon" element={<Trending />} />
              <Route exact path="/be_&_eller_tylby_hjelp" element={<Trending />} />
              <Route exact path="/diskusjoner" element={<Trending />} />
              <Route exact path="/lokalet_forum" element={<Trending />} />
              <Route exact path="/del_kunskapp" element={<Trending />} />
              <Route exact path="/dugnad_&_frivillig" element={<Trending />} />
              <Route exact path="/kunskap_bygging" element={<Trending />} />
              <Route exact path="/informasjon" element={<Trending />} />
              <Route exact path="/nettverking" element={<Trending />} />
              <Route exact path="/bli_kjent" element={<Trending />} />
              <Route exact path="/konkuranse" element={<Trending />} />
              <Route exact path="/finne_lokale" element={<Trending />} />
              <Route exact path="/kollaborasjon" element={<Trending />} />
              <Route exact path="/altlokal_klubb" element={<Trending />} />
              <Route exact path="/kultur_kalender" element={<Trending />} />
              <Route exact path="/kurs_webinar_&_seminar" element={<Trending />} />
              <Route exact path="/partnerskap_&_sponsor" element={<Trending />} />
              <Route exact path="/ideer_&_forslag_(ideer_bank)" element={<Trending />} />
              <Route exact path="/informasjon" element={<Trending />} />
              <Route exact path="/nettverking" element={<Trending />} />
              <Route exact path="/bli_kjent" element={<Trending />} />
              <Route exact path="/konkuranse" element={<Trending />} />
              <Route exact path="/finne_lokale" element={<Trending />} />
              <Route exact path="/kollaborasjon" element={<Trending />} />
              <Route exact path="/altlokal_klubb" element={<Trending />} />
              <Route exact path="/kultur_kalender" element={<Trending />} />
              <Route exact path="/kurs_webinar_&_seminar" element={<Trending />} />
              <Route exact path="/partnerskap_&_sponsor" element={<Trending />} />
              <Route exact path="/ideer_&_forslag_(ideer_bank)" element={<Trending />} />
              <Route exact path="/liste_over_alle" element={<Trending />} />
              <Route exact path="/næringsliv" element={<Trending />} />
              <Route exact path="/handel" element={<Trending />} />
              <Route exact path="/siste_nytt" element={<Trending />} />
              <Route exact path="/helse_&_velvære" element={<Trending />} />
              <Route exact path="/bedrifter" element={<Trending />} />
              <Route exact path="/butikker" element={<Trending />} />
              <Route exact path="/trafikk" element={<Trending />} />
              <Route exact path="/skaper" element={<Trending />} />
              <Route exact path="/forslagskasse" element={<Trending />} />
              <Route exact path="/omtaler" element={<Trending />} />
              <Route exact path="/liste_over_alle" element={<Trending />} />
              <Route exact path="/næringsliv" element={<Trending />} />
              <Route exact path="/handel" element={<Trending />} />
              <Route exact path="/siste_nytt" element={<Trending />} />
              <Route exact path="/helse_&_velvære" element={<Trending />} />
              <Route exact path="/bedrifter" element={<Trending />} />
              <Route exact path="/butikker" element={<Trending />} />
              <Route exact path="/trafikk" element={<Trending />} />
              <Route exact path="/skaper" element={<Trending />} />
              <Route exact path="/forslagskasse" element={<Trending />} />
              <Route exact path="/omtaler" element={<Trending />} />
              <Route exact path="/aktuelt" element={<Trending />} />
              <Route exact path="/status" element={<Trending />} />
              <Route exact path="/opplagstavler_fra_buttikken" element={<Trending />} />
              <Route exact path="/kultur_front" element={<Trending />} />
              <Route exact path="/politikk_og_historie" element={<Trending />} />
              <Route exact path="/tilfrukts_områder" element={<Trending />} />
              <Route exact path="/nabolaget" element={<Trending />} />
              <Route exact path="/innbyggere_og_bestander" element={<Trending />} />
              <Route exact path="/friluftsliv_og_sport" element={<Trending />} />
              <Route exact path="/virksomhet" element={<Trending />} />
              <Route exact path="/aktuelt" element={<Trending />} />
              <Route exact path="/status" element={<Trending />} />
              <Route exact path="/opplagstavler_fra_buttikken" element={<Trending />} />
              <Route exact path="/kultur_front" element={<Trending />} />
              <Route exact path="/politikk_og_historie" element={<Trending />} />
              <Route exact path="/tilfrukts_områder" element={<Trending />} />
              <Route exact path="/nabolaget" element={<Trending />} />
              <Route exact path="/innbyggere_og_bestander" element={<Trending />} />
              <Route exact path="/friluftsliv_og_sport" element={<Trending />} />
              <Route exact path="/virksomhet" element={<Trending />} />
              <Route exact path="/dette_skjer" element={<Trending />} />
              <Route exact path="/eventer_konserter_fest" element={<Trending />} />
              <Route exact path="/legg_til_arrangement" element={<Trending />} />
              <Route exact path="/utforsk" element={<Trending />} />
              <Route exact path="/attraksjoner" element={<Trending />} />
              <Route exact path="/kommende_arrangementer" element={<Trending />} />
              <Route exact path="/arrangementer_du_følger" element={<Trending />} />
              <Route exact path="/arrangementer_i_nærheten" element={<Trending />} />
              <Route exact path="/får_tilsendt_arrangementer" element={<Trending />} />
              <Route exact path="/dette_skjer" element={<Trending />} />
              <Route exact path="/eventer_konserter_fest" element={<Trending />} />
              <Route exact path="/legg_til_arrangement" element={<Trending />} />
              <Route exact path="/utforsk" element={<Trending />} />
              <Route exact path="/attraksjoner" element={<Trending />} />
              <Route exact path="/kommende_arrangementer" element={<Trending />} />
              <Route exact path="/arrangementer_du_følger" element={<Trending />} />
              <Route exact path="/arrangementer_i_nærheten" element={<Trending />} />
              <Route exact path="/får_tilsendt_arrangementer" element={<Trending />} />
              <Route exact path="/soknadsfrist_oversikt" element={<Trending />} />
              <Route exact path="/nod_og_forventninger" element={<Trending />} />
              <Route exact path="/kjekk_temperatur" element={<Trending />} />
              <Route exact path="/oppdatert_informasjon" element={<Trending />} />
              <Route exact path="/var_og_luft" element={<Trending />} />
              <Route exact path="/frister" element={<Trending />} />
              <Route exact path="/trafikk_meldinger" element={<Trending />} />
              <Route exact path="/reservasjon_kalender" element={<Trending />} />
              <Route exact path="/okonomi_regnskap" element={<Trending />} />
              <Route exact path="/kultur_kalender" element={<Trending />} />
              <Route exact path="/siste_nytt" element={<Trending />} />
              <Route exact path="/soknadsfrist_oversikt" element={<Trending />} />
              <Route exact path="/nod_og_forventninger" element={<Trending />} />
              <Route exact path="/kjekk_temperatur" element={<Trending />} />
              <Route exact path="/oppdatert_informasjon" element={<Trending />} />
              <Route exact path="/var_og_luft" element={<Trending />} />
              <Route exact path="/frister" element={<Trending />} />
              <Route exact path="/trafikk_meldinger" element={<Trending />} />
              <Route exact path="/reservasjon_kalender" element={<Trending />} />
              <Route exact path="/okonomi_regnskap" element={<Trending />} />
              <Route exact path="/kultur_kalender" element={<Trending />} />
              <Route exact path="/siste_nytt" element={<Trending />} />
              <Route exact path="/sok-etter-jobb" element={<Trending />} />
              <Route exact path="/laerling-og-praksis" element={<Trending />} />
              <Route exact path="/lokale-jobber" element={<Trending />} />
              <Route exact path="/ekspert-og-profesjonell" element={<Trending />} />
              <Route exact path="/talenter" element={<Trending />} />
              <Route exact path="/internship" element={<Trending />} />
              <Route exact path="/jobber-du-allerede" element={<Trending />} />
              <Route exact path="/jobber-anbefallinger" element={<Trending />} />
              <Route exact path="/kandidat-sok" element={<Trending />} />
              <Route exact path="/publiser-jobb" element={<Trending />} />
              <Route exact path="/rask-jobbtilbud-haster" element={<Trending />} />
              <Route exact path="/sok-etter-jobb" element={<Trending />} />
              <Route exact path="/laerling-og-praksis" element={<Trending />} />
              <Route exact path="/lokale-jobber" element={<Trending />} />
              <Route exact path="/ekspert-og-profesjonell" element={<Trending />} />
              <Route exact path="/talenter" element={<Trending />} />
              <Route exact path="/internship" element={<Trending />} />
              <Route exact path="/jobber-du-allerede" element={<Trending />} />
              <Route exact path="/jobber-anbefallinger" element={<Trending />} />
              <Route exact path="/kandidat-sok" element={<Trending />} />
              <Route exact path="/publiser-jobb" element={<Trending />} />
              <Route exact path="/rask-jobbtilbud-haster" element={<Trending />} />
              <Route exact path="/avtale_mote" element={<Trending />} />
              <Route exact path="/presse" element={<Trending />} />
              <Route exact path="/invester" element={<Trending />} />
              <Route exact path="/kontakt_oss" element={<Trending />} />
              <Route exact path="/blogg" element={<Trending />} />
              <Route exact path="/utvikler" element={<Trending />} />
              <Route exact path="/kom_i_gang" element={<Trending />} />
              <Route exact path="/stott" element={<Trending />} />
              <Route exact path="/investerings" element={<Trending />} />
              <Route exact path="/mer_informasjon" element={<Trending />} />
              <Route exact path="/avtale_mote" element={<Trending />} />
              <Route exact path="/presse" element={<Trending />} />
              <Route exact path="/invester" element={<Trending />} />
              <Route exact path="/kontakt_oss" element={<Trending />} />
              <Route exact path="/blogg" element={<Trending />} />
              <Route exact path="/utvikler" element={<Trending />} />
              <Route exact path="/kom_i_gang" element={<Trending />} />
              <Route exact path="/stott" element={<Trending />} />
              <Route exact path="/investerings" element={<Trending />} />
              <Route exact path="/mer_informasjon" element={<Trending />} />
              <Route exact path="/konto_oversikt" element={<Trending />} />
              <Route exact path="/opprett_bedrift_konto" element={<Trending />} />
              <Route exact path="/legg_til_arrangement" element={<Trending />} />
              <Route exact path="/legg_til_oppdrag" element={<Trending />} />
              <Route exact path="/bli_en_leverandør" element={<Trending />} />
              <Route exact path="/registrer_din_kunnskap" element={<Trending />} />
              <Route exact path="/mitt_innhold_og_nettverk" element={<Trending />} />
              <Route exact path="/mitt_selskap" element={<Trending />} />
              <Route exact path="/mitt" element={<Trending />} />
              <Route exact path="/medlemsfrister" element={<Trending />} />
              <Route exact path="/avtale_møte" element={<Trending />} />
              <Route exact path="/send_inn_alt" element={<Trending />} />
              <Route exact path="/konto_oversikt" element={<Trending />} />
              <Route exact path="/opprett_bedrift_konto" element={<Trending />} />
              <Route exact path="/legg_til_arrangement" element={<Trending />} />
              <Route exact path="/legg_til_oppdrag" element={<Trending />} />
              <Route exact path="/bli_en_leverandør" element={<Trending />} />
              <Route exact path="/registrer_din_kunnskap" element={<Trending />} />
              <Route exact path="/mitt_innhold_og_nettverk" element={<Trending />} />
              <Route exact path="/mitt_selskap" element={<Trending />} />
              <Route exact path="/mitt" element={<Trending />} />
              <Route exact path="/medlemsfrister" element={<Trending />} />
              <Route exact path="/avtale_møte" element={<Trending />} />
              <Route exact path="/send_inn_alt" element={<Trending />} />
              <Route exact path="/kontoinnstillinger" element={<Trending />} />
              <Route exact path="/oppdater_konto" element={<Trending />} />
              <Route exact path="/oppgrader_konto" element={<Trending />} />
              <Route exact path="/logg_ut" element={<Trending />} />
              <Route exact path="/personvern" element={<Trending />} />
              <Route exact path="/sikkerhet" element={<Trending />} />
              <Route exact path="/konto" element={<Trending />} />
              <Route exact path="/slett_konto" element={<Trending />} />
              <Route exact path="/hjelp" element={<Trending />} />
              <Route exact path="/kontoinnstillinger" element={<Trending />} />
              <Route exact path="/oppdater_konto" element={<Trending />} />
              <Route exact path="/oppgrader_konto" element={<Trending />} />
              <Route exact path="/logg_ut" element={<Trending />} />
              <Route exact path="/personvern" element={<Trending />} />
              <Route exact path="/sikkerhet" element={<Trending />} />
              <Route exact path="/konto" element={<Trending />} />
              <Route exact path="/konto_sikkerhet" element={<Trending />} />
              <Route exact path="/slett_konto" element={<Trending />} />
              <Route exact path="/hjelp" element={<Trending />} />

            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.EDITOR]} />}>
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route exact path="/user-edit" element={<UsersEditable/>} />
            </Route>


            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.EDITOR]} />}>
            <Route exact path="/update_company" element={<UpdateCompany />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.EDITOR, ROLES.USER]} />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/company" element={<CompanyPage />} />
              <Route exact path="/brreg" element={<CompanyPageApi />} />
              <Route exact path="/companies" element={<BrregCompany />} />
              <Route exact path="/users" element={<Users />} />
           
            </Route>


            {/* catch alls */}
            <Route exact path="*" element={<Error404 />} />

          </Route>
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>

  );
}

export default App;
