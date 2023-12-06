<script>
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
    components: {
        highlightjs: hljsVuePlugin.component
    }
}
</script>

<template>
  <main>
    <h1>Databaser</h1>
    <h2>- et mini-mini-kræsjkurs i SQL og NoSQL</h2>
    <p>Databaser finner overalt og i mange varianter, omtrent alle programmer som gjør noe trenger en database for å lagre og organisere data. Tradisjonelle relasjonelle databaser er ikke noe hokus pokus. Det er tabeller med rader og kolonner og så kobles disse tabellene sammen med relasjoner. F.eks kan en tabell med kunder ha en kobling med ordre som er bestilt av kunden. Da kan en slik database for en butikk se slik ut:</p>
    <p><b>Customers</b></p>
    <table>
      <thead><th>fields</th><th>value</th></thead>
      <tr><td>id</td><td>a</td></tr>
      <tr><td>name</td><td>Asbjørn</td></tr>
    </table>
    <p><b>Orders</b></p>
    <table>
      <thead><th>fields</th><th>value</th></thead>
      <tr><td>id</td><td>1</td></tr>
      <tr><td>customer</td><td>a</td></tr>
      <tr><td>delivered</td><td>false</td></tr>
    </table>
    <p>For å hente ut data fra en slik database bruker vi SQL (Structured Query Language). SQL er et altså språk for å hente ut data fra databaser. Det er ikke så vanskelig å komme i gang med og bruker engelske ord for mye av funksjonaliteten.</p>
    <p>For å hente ut alle ordre en bestemt kunde har lagt i databasen kan vi bruke en SQL spørring som ser slik ut:<br/>
      <highlightjs
  language="sql"
  code="SELECT * FROM orders 
  WHERE customer.id = 1"
/>
          
          Bruken av * er bare latskap, det betyr at vi vil ha med alle kolonnene i tabellen. En bedre måte å gjøre det på er å liste opp de kolonnene vi faktisk trenger.
        </p>
        <p>
          Om du ønsker å få med navn og annen informasjon om kunden sammen med ordrene kan du bruke en JOIN spørring som ser slik ut:
          
          <highlightjs
  language="sql"
  code="SELECT * FROM orders 
  JOIN customers ON orders.customer_id = customers.id 
  WHERE customers.id = 1"
/>
        </p>
        <p>
          Og hvis vi bare vil ta med ordre som ikke er levert enda kan vi legge til en ekstra betingelse:
          <highlightjs
  language="sql"
  code="SELECT * FROM orders 
  JOIN customers ON orders.customer_id = customers.id 
  WHERE customers.id = 1 
  AND orders.delivered = false"
/>
        </p>
        <p>For Task LMS bruker vi to ulike typer databaser, vi bruker en SQL database for å lagre informasjon om brukere, kurs, innhold og så videre og da bruker vi <a href="https://www.postgresql.org/">PostgreSQL</a>. Vi bruker også en key-value database for en del av autentiseringen og der bruker vi <a href="https://redis.com/">Redis</a>. Andre veldig mye brukte SQL databaser er f.eks <a href="https://www.mysql.com/">MySQL</a> og <a href="https://www.microsoft.com/en-us/sql-server/">Microsoft SQL Server</a>. 
        </p>
        <p>
          I nettleseren er det også en innebygd database som kan brukes av en nettside for å lagre og organisere data på klientsiden, den heter <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a> og likner veldig på tradisjonelle SQL databaser.
        </p>
        <p>
          NoSQL er en samlebetegnelse på databaser som ikke er basert på SQL. En del er dokumentdatabaser som <a href="https://www.mongodb.com">MongoDB</a> og <a href="https://firebase.google.com/docs/firestore">Firestore</a>, andre er key-value basert som Redis. 
        </p>
        <p>
          Og for quizen i denne julekalenderen bruker jeg Google Sheets som en slags database, det funker til slike små prosjekter men er ikke brukbart når det blir større mengder brukere og data.
        </p>
        <p>
          Lyst til å prøve deg litt på SQL? Her kan du leke deg litt med en liksom-database og teste spørringer: <a href="https://sqlime.org/#demo.db ">SQLite Playground</a>
          
        </p>
          <h3 style="margin-block-start: 2rem;">Lær deg mer?</h3>
          <p><a href="https://www.freecodecamp.org/news/posgresql-course-for-beginners/">FreeCodeCamp sitt gratis nybegynnerkurs</a><br/>
          <a href="https://egghead.io/courses/get-started-with-postgresql">Egghead - get started with PostgreSQL</a> (trenger abonnement)</p>
          


  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
