const SectionOne = () => {
  return (
    <section className="section__wrapper">
      <div className="container">
        <div className="section__content">
          <p className="paragraph">
            Personvernerklæringen handler om hvordan JR Design samler inn og
            bruker informasjon om besøkende på våre nettsteder. Erklæringen
            inneholder informasjon du har krav på når det samlesinn opplysninger
            fra nettstedet vårt (personopplysningsloven § 19), og generell
            informasjon om hvordan vi behandler personopplysninger
            (personopplysningsloven § 18, 1.ledd). JR Design er
            behandlingsansvarlig for virksomhetens behandling av
            personopplysninger. Det er frivillig for de som besøker nettsidene å
            oppgi personopplysninger i forbindelse med tjenester som å motta
            nyhetsbrev og benytte del- og tipstjenesten. Behandlingsgrunnlaget
            er samtykke fra den enkelte, med mindre annet er spesifisert.
          </p>
          <h3 className="medium">
            Webanalyse og informasjonskapsler (cookies)
          </h3>
          <p className="paragraph">
            Som en viktig del av arbeidet med å lage et brukervennlig nettsted,
            ser vi på brukermønsteret til de som besøker nettstedet. For å
            analysere informasjonen, bruker vi analyseverktøyet{" "}
            <a
              href="https://marketingplatform.google.com/about/analytics/"
              target="_blank"
              rel="noopener"
            >
              Google Analytics
            </a>{" "}
            .
          </p>
          <p className="paragraph">
            Google Analytics bruker <b>informasjonskapsler/cookies</b> (små
            tekstfiler som nettstedet lagrer på brukerens datamaskin), som
            registrerer brukernes IP-adresse, og som gir informasjon om den
            enkelte brukers bevegelser på nett. Eksempler på hva statistikken
            gir oss svar på er; hvor mange som besøker ulike sider, hvor lenge
            besøket varer, hvilke nettsteder brukerne kommer fra og hvilke
            nettlesere som benyttes. Ingen av informasjonskapslene gjør at vi
            kan knytte informasjon om din bruk av nettstedet til deg som
            enkeltperson.
          </p>
          <p className="paragraph">
            Informasjonen som samles inn av Google Analytics, lagres på Googles
            servere i USA. Mottatte opplysninger er underlagt{" "}
            <a
              href="https://policies.google.com/privacy?hl=no"
              target="_blank"
              rel="noopener"
            >
              Googles retningslinjer for personvern
            </a>
            . En IP-adresse er definert som en personopplysning fordi den kan
            spores tilbake til en bestemt maskinvare og dermed til en
            enkeltperson. JR Design bruker Google Analytics sin sporingskode som
            anonymiserer IP-adressen før informasjonen lagres og bearbeides av
            Google. Dermed kan ikke den lagrede IP-adressen brukes til å
            identifisere den enkelte brukeren.
          </p>
          <h3 className="medium">Søk</h3>
          <p className="paragraph">
            JR Design lagrer informasjon om hvilke søkeord brukerne benytter på
            våre nettsteder i Google Analytics. Formålet med lagringen er å
            gjøre informasjonstilbudet vårt bedre. Bruksmønsteret for søk lagres
            i aggregert form. Det er bare søkeordet som lagres, og de kan ikke
            kobles til andre opplysninger om brukerne, slik som til
            IP-adressene. Ved spørsmål og henvendelser angående vår behandling
            av personopplysninger kan du kontakte{" "}
            <a href="mailto:post@jrdesign.no">post@jrdesign.no</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
