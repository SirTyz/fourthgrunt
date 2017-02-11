'use strict';

/**
 * @ngdoc function
 * @name fourthgruntApp.controller:NamesGeneratorCtrl
 * @description
 * # NamesGeneratorCtrl
 * Controller of the fourthgruntApp
 */
angular.module('fourthgruntApp')
  .controller('NamesGeneratorCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(document).ready(function(){
  //Creates a male name on press
  $("#inputButtonM").click(function(){
        $(".randomNameInfo").html(function(){
          var firstName = [
            "Bjorn"," Thomas"," Till"," Silvester"," Lucas"," George"," Axel"," Tillmann"," Alexander"," Ludwig"," Ustin"," Maxim"," Stefan"," Bogdan"," Luka"," Otbert"," Vigor"," Thegan"," Garivald"," Fulrad"," Razo"," Wulfram"," Leuthard"," Turpin"," Otto"," Fulk"," Hubert"," Clovis"," Odo"," Anno"," Karlmann"," Anskar"," Folmar"," Tihomir"," Vlad"," Wella"," Gunteric"," Colias"," Rikiar"," Galindus"," Mundo"," Alaric"," Aligern"," Rodolf"," Eberwolf"," Salla"," Borani"," Bilimer"," Duda"," Agila"," Totila"," Odoin"," Huml"," Ibba"," Ovida"," Saphrax"," Dins"," Salvis"," Albins"," Egils"," Nocler"," Zuba"," Fograal"," Odlec"," Sokolt"," Kralca"," Stutra"," Muallor"," Dizoc"," Koveen"," Liazu"," Enad"," Suneld"," Derkay"," Asrall"," Kraice"," Dobroka"," Stilmul"," Enza"," Logac"," Okeak"," Aryer"," Hendla"," Drurna"," Thaiva"," Marua"," Kriskar"," Bultalt"," Chatar"," Drimi"," Geiblor"," Cothmand"," Dulwal"," Strizast"," Ebe"," Tholuk"," Tilcas"," Undlo"," Nultad"," Bruson"," Gritri","Ben","Paul","Jonas","Elias","Leon","Finn","Noah","Luis","Lukas","Luca","Maximilian","Henry","Max","Oskar","Emil","Liam","Jakob","Moritz","Anton","Julian","Theo","Niklas","David","Philipp","Alexander","Tim","Matteo","Milan","Leo","Tom","Mats","Carl","Erik","Linus","Jonathan","Jan","Fabian","Leonard","Samuel","Rafael","Jona","Jannik","Simon","Vincent","Mika","Hannes","Lennard","Till","Aaron","Karl","Wilhelm","Heinrich","Hans","Otto","Hermann","Walter","Friedrich","Ernst","Willi","Fritz","Franz","Gustav","August","Johannes","Johann","Rudolf","Alfred","Georg","Albert","Richard","Erich","Artur","Kurt","Robert","Josef","Hugo","Ludwig","Bruno","Bernhard","Herbert","Theodor","Martin","Peter","Eduard","Henri","Werner","John","Julius","Kristian","HelmutHinrich","Reinhold","Erwin","Ferdinand","Konrad","Michael","Alwin","Harry","Jonny","Arnold","Ewald","Klaus","Alfons","Felix","Gerhard","Edmund","Stanislaus","Berthold","Ulrich","Waldemar","Aiden","Daniel","Sean","Conor","Dylan","Niall","Cian","Darragh","Oisin","Abel m","Abraham","Abram","Absalon","Acasius","Achim","Adalbert","Adam","Adar","Addar","Addi m","Adel m","Adelstein","Adelsten","Adiel","Adler","Adolf","Adolph","Adonis","Ador","Adriaen","Adrian","Adriano","Adrianus","Adriel","Agathon","Agaton","Agdar","Agder","Agerton","Agmund","Agnar","Agne m","Agner","Agneton","Agnor","Agrim","Agur","Agust","Agvald","Ahl","Ailo","Aimar","Aimo","Ain","Aivert","Akim","Akkim","Aksel","Aksnes","Akvilas","Al m","Aladdin","Aladin","Alan","Aland","Alarik","Alban","Alberg","Alberto","Albertus","Albin","Albinus","Albrecht","Albrekt","Albret","Albreth","Albrigt","Albrikt","Aldor","Aldrik","Ale m","Alec","Alek","Aleks","Aleksander","Aleksei","Aleksej","Aleksey","Alen m","Alert","Ales m","Alex m","Alexei","Alexej","Alexey","Alexis m","Alexius","Alf","Alfar","Alfie m","Alfinn","Alfon","Alfred m","Alfrid m","Algot","Ali m","Allan","Allen m","Allert","Almar","Almer","Alois","Aloysius","Alphonse","Alrek","Alrik","Alsing","Alt","Alton","Alv","Alvald","Alvar","Alvard","Alvarin","Alvaro","Alve","Alver","Alvfinn","Alvgeir","Alvi m","Alvin","Alvinius","Alvir","Alvis","Amadeus","Amaldus","Amalek","Amalik","Amandius","Amandus","Amanuel","Ambjørn","Ambros","Ambrosius","Amfinn","Amin","Amir","Amor m","Amos","Amund","Analius","Ananias","Anathon","Anaton","Anbjørn","Ancher","Andar","Ande m","Anders","Andi m","Ando","Andolf","Andor","Andorf","Andras","Andre","André","Andreas","Andrei","Andrej","Andres","Andrew","Andrey","Andri","Andrias","Andries","Andrin","Andris","Andro","Androder","Androe","Andrus","Andrzej","Andy m","Anfeldt","Anfelt","Anfin","Anfind","Anfinn","Anfred","Angel m","Angell","Angelo","Angrim","Ani m","Anje m","Anker","Ankjell","Annanias","Annar","Annas","Annathon","Annaton","Baard","Bagge","Balder","Baldor","Baldrek","Baldur","Baldvin","Balo","Baltasar","Baltser","Baltzer","Barak","Bardo","Bardon","Barius","Barnabas","Baro","Barrie","Barry","Barthol","Barthold","Bartol","Bartolv","Baruk","Basse","Baste","Bastian","Bastinus","Beau m","Bedin","Beint","Belest","Bellest","Belmar","Bendigt","Bendik","Bendiks","Bendikt","Bendix","Bendt","Benedict","Benedikt","Bengeir","Bengt","Benito","Benjamin","Benn","Benno","Benny m","Benoni","Bent","Bentein","Benth","Bentley","Benyamin","Berau","Beraug","Berdines","Berdinus","Berdon","Berdor","Berend","Berent","Berg","Berge","Berger","Bergethon","Bergeton","Bergfinn","Berginius","Bergithon","Bergiton","Bergljot m","Bergsvein","Bergsvend","Bergtor","Bergulv","Berhard","Bermod","Bern","Bernard","Bernardus","Bernatt","Bernd","Berndt","Berner","Bernhardt","Bernhardus","Bernhof","Bernt","Bernth","Berntinus","Bersvein","Bersvend","Bert","Bertel","Bertenius","Berteus","Berthel","Bertheus","Berthin","Berthinus","Bertho","Bertil","Bertin","Bertinius","Bertinus","Berto","Berton","Bertor","Bertram","Bertrand","Berulf","Berulv","Besse","Bethuel","Betuel","Bill","Bille m","Billy m","Bilov","Birger","Birgiton","Birk","Birning","Bjarke","Bjarnard","Bjarne","Bjarnhard","Bjarni","Bjarnmod","Bjarnulv","Bjart","Bjarte","Bjartmar","Bjermod","Bjermund","Bjerner","Bjerte","Bjor","Bjug","Bjønnal","Bjønne","Bjørge","Bjørger","Bjørgulv","Bjørguv","Bjørgvin","Bjørn","Bjørnar","Bjørnard","Bjørne","Bjørner","Bjørnmund","Bjørnodd","Bjørnstein","Bjørnstjerne","Bjørnulv","Bjørnvald","Bjøro","Bjøru","Blaise","Blas","Blostrup","Bo m","Boas","Bob","Bobby m","Bodmod","Bodo","Bodvar","Boge","Boi","Boie","Boje","Bonde","Bonsak","Borgar","Borge","Borger","Borgfinn","Borgvald","Borild","Boris","Bortinus","Borys","Botel m","Botolf","Botolv","Bottolf","Bottolv","Botvid","Boy","Boye","Brage","Brand","Brandalv","Taale","Taavi","Tage","Tai","Taj","Tallak","Talleiv","Tallev","Tancred","Tandrup","Tanke","Tankred","Tao","Tapani","Tarald","Tarbjørn","Tarhald","Tarik","Tarild","Tarje","Tarjei","Tarjer","Tarrald","Tarry","Tarvald","Ted","Teddy m","Tedor","Teis","Tellef","Telleiv","Tellev","Telli m","Telmar","Tengel","Tenny","Teo","Teobald","Teodor","Teofil","Teovald","Terence","Teresius","Terje m","Terjei","Terjer","Terkel","Terkjel","Termund","Terry m","Tevje","Thage","Thedor","Theis","Theodore","Theodorus","Thias","Thile","Thilo","Thim","Thin m","Thobias","Tholf","Thom","Thomander","Thomas","Thommas","Thommy","Thomæs","Thor","Thoralf","Thorben","Thorbjørn","Thord","Thordur","Thore","Thorer","Thorfinn","Thorger","Thorgir","Thorgrim","Thorkel","Thorkil","Thorkild","Thorlacius","Thorleif","Thormod","Thorolf","Thorry","Thorstein","Thorsten","Thorvald","Thron","Thrond","Thure","Thyge","Thøger","Tias","Tibor","Tide","Tideke","Tidemann","Tilbert","Tile","Tilo","Timann","Timian m","Timm","Timmi m","Timmie","Timmy","Timo","Timofei","Timon","Timotei m","Timoteus","Timotheus","Timothy","Tin m","Tinius","Tino","Tinus","Tito","Titus","Tiøstov","Tjalve","Tjark","Tjerand","Tjerrand","Tjodar","Tjodbjørn","Tjodgeir","Tjodolf","Tjodolv","Tjodrek","Tjodvald","Tjodvard","Tjogjei","Tjojei","Tjostolv","Tjærand","Tjøl","Tjølv","Tjøstel","Tjøsten","Tjøstol","Tjøstolv","Tjøstov","Tobias","Toby m","Todd","Toivo","Tolla m","Tollach","Tollak","Tollef","Tolleif","Tolleiv","Tollek","Tollev","Tolli m","Tolv","Toma m","Tomander","Tomas","Tomes","Tomm","Tommas","Tommes","Tommi","Tommie","Tommy","Toni m","Tonius","Tonni m","Tonning","Tonny m","Tony m","Tor","Torald","Toralf","Toralv","Torar","Torarin","Torben","Torberg","Torbjørn","Torchel","Tord","Tordar","Tordur","Tore m","Torenius","Torer","Toresius"
          ];

          var lastName = [
            "Wolfsohn",
            "Gerster",
            "Korsch",
            "Beer",
            "Heidler",
            "Strier",
            "Teyber",
            "Traub",
            "Dorn",
            "Wernz",
            "Hersh",
            "Wexner",
            "Scheck",
            "Hopfer",
            "Hoger",
            "Hagel",
            "Scheck",
            "Drossel",
            "Voigt",
            "Horstmann",
            "Martin",
            "Apel",
            "Ober",
            "Schultz",
            "Heller",
            "Heim",
            "Dahmen",
            "Rosin",
            "Wahl",
            "Mayr",
            "Steinberg",
            "Denker",
            "Haass",
            "Elser",
            "Blatt",
            "Dullum",
            "Norberg",
            "Baardsen",
            "Vee",
            "Salmonsen",
            "Ohlsen",
            "Opsal",
            "Danielsen",
            "Lovland",
            "Jorstad",
            "Ulberg",
            "Lybeck",
            "Underberg",
            "Asplund",
            "Nystrom",
            "Backer",
            "Sabo",
            "Selvig",
            "Overbey",
            "Bentzen",
            "Hamar",
            "Jorde",
            "Arvesen",
            "Helland",
            "Haarstad",
            "Bjorgen",
            "Ulven",
            "Bjelland",
            "Solem",
            "Sund"
          ];

          var suffix = [
            "the Shackled",
            "the Lonely",
            "the Ambitious",
            "the Small",
            "the Giant",
            "the Weak",
            "the Meek",
            "the Righteous",
            "the Young",
            "the Fat",
            "the Cold",
            "the Bloody",
            "the Ill",
            "the Coward",
            "the Silent",
            "of Oakburn",
            "of Karmswald",
            "of The Reich",
            "of Faykeep",
            "of Westerheim",
            "of the Barrows",
            "of Allenfel",
            "of the Chase",
            "of Ernst",
            "of the Hills",
            "of Bellagin",
            "of Oftburg",
            "of Thurderry",
            "of the Ward",
            "the Civilized",
            "of Hooftheim",
            "the Plauged",
            "the Cleaver",
            "the Fleshling",
            "the Mongrel",
            "the Wyrm",
            "of the Crow",
            "the Tongue Splitter",
            "the Charming",
            "the Acolyte",
            "the Betrothed",
            "the Liar",
            "the Keeper",
            "of the Void",
            "the Old",
            "the Blind",
            "the Gored",
            "Toad-Bane",
            "Toad-Bane",
            "the Forgivable",
            "the Splintered",
            "the Keeper of Lies",
            "the Drowning God",
            "the Swine",
            "of the Wilds",
            "Thrice-Burried",
            "the Breath of the Gods",
            "the Cherished",
            "the Vulgar",
            "the Invincible",
            "the Blasphemer",
            "the Unbroken",
            "the Unshackeled",
            "the Mad",
            "the Seer",
            "Black-Lungs",
            "the Long Traveled",
            "the Weary",
            "of the Fourth Blight",
            "of the Final Hour",
            "of the First Hour",
            "the First Born",
            "the Last Born",
            "the Elder",
            "the Senseless",
            "the Reader",
            "the Dark",
            "the Enlightened",
            "the Dull",
            "follower of Kor",
            "of the Tweleve",
            "the First",
            "the Second",
            "the Third",
            "the Fourth",
            "the Fifth",
            "the Sixth",
            "the Godless",
            "the Hefty",
            "the Contagious",
            "the Inverted",
            "the Vessel",
            "the Pastel",
            "Pact-Bound",
            "of Woe",
            "the Herald",
            "the Cursed",
            "the Crimson",
            "the White",
            "the Black"

          ];

          var prefix = [
            "Master",
            "Protector",
            "Tribune",
            "Saint",
            "Assistant",
            "Earl",
            "Prime",
            "Chaplain",
            "Templar",
            "Professor",
            "Assistant",
            "Librarian",
            "Sir",
            "Lord",
            "Imperator",
            "Governor",
            "Prince",
            "Corporal",
            "General",
            "Commander",
            "Exarch"
          ];

          //Finds first name for a male
          var randomSelection = Math.floor(Math.random() * firstName.length);
          var names = firstName[randomSelection];

          //Finds last name
          randomSelection = Math.floor(Math.random() * lastName.length);
          names = (names + " " + lastName[randomSelection]);

          //Adds prefix
          randomSelection = (Math.floor(Math.random() * 100) - 1);
          if ( randomSelection <= 5)
          {
            randomSelection = Math.floor(Math.random() * prefix.length);
            names = (prefix[randomSelection] + " " + names);
          }

          //Adds suffix
          randomSelection = (Math.floor(Math.random() * 100) - 1);
          if ( randomSelection <= 10)
          {
            randomSelection = Math.floor(Math.random() * suffix.length);
            names = (names + " " + suffix[randomSelection]);
          }

          return names;

        });
    });

  //Creates a female name on press
  $("#inputButtonF").click(function(){
        $(".randomNameInfo").html(function(){
          var firstName = [
            "Theri",
            "Brinfre",
            "Subu",
            "Kuli",
            "Suve",
            "Brithan",
            "Reidda",
            "Yeva",
            "Alina",
            "Sonya",
            "Slavena",
            "Lera",
            "Evelina",
            "Frosya",
            "Alisa",
            "Raya",
            "Marta",
            "Emma",
            "Zoya",
            "Emilia",
            "Sophie",
            "Mara",
            "Irene",
            "Jessica",
            "Judith",
            "Monika",
            "Sigrid",
            "Ingrid",
            "Veronika",
            "Inga",
            "Cathrin",
            "Natalie",
            "Magda",
            "Verona",
            "Dorothea",
            "Nicola",
            "Wibke",
            "Ella",
            "Hilde",
            "Valerie",
            "Katja",
            "Auguste",
            "Erica",
            "Sonja",
            "Raya",
            "Elya",
            "Anya",
            "Sophya",
            "Verok",
            "Alina",
            "Tetyana",
            "Masha",
            "Sveta",
            "Ulya",
            "Nika",
            "Roza",
            "Narin",
            "Aleyda",
            "Mira",
            "Lucienne",
            "Monia",
            "Alwina",
            "Anouk",
            "Gelvira",
            "Oonagh",
            "Liuva",
            "Gaatha",
            "Teja",
            "Impi",
            "Kiira",
            "Sylvia",
            "Paivi",
            "Salla",
            "Noora",
            "Olivia",
            "Mari",
            "Elsi",
            "Iina",
            "Emmi",
            "Heidi",
            "Aini",
            "Sointu",
            "Pihla",
            "Gwen",
            "Karen",
            "Bianca",
            "Jan",
            "Nina",
            "Yaelle",
            "Eved",
            "Esa",
            "Siw",
            "Elsy",
            "Litha",
            "Hagny",
            "Penny",
            "Ammy",
            "Oddny",
            "Svanfrid",
            "Ragnvor",
            "Vigdis"


          ];

          var lastName = [
            "Wolfsohn",
            "Gerster",
            "Korsch",
            "Beer",
            "Heidler",
            "Strier",
            "Teyber",
            "Traub",
            "Dorn",
            "Wernz",
            "Hersh",
            "Wexner",
            "Scheck",
            "Hopfer",
            "Hoger",
            "Hagel",
            "Scheck",
            "Drossel",
            "Voigt",
            "Horstmann",
            "Martin",
            "Apel",
            "Ober",
            "Schultz",
            "Heller",
            "Heim",
            "Dahmen",
            "Rosin",
            "Wahl",
            "Mayr",
            "Steinberg",
            "Denker",
            "Haass",
            "Elser",
            "Blatt",
            "Dullum",
            "Norberg",
            "Baardsen",
            "Vee",
            "Salmonsen",
            "Ohlsen",
            "Opsal",
            "Danielsen",
            "Lovland",
            "Jorstad",
            "Ulberg",
            "Lybeck",
            "Underberg",
            "Asplund",
            "Nystrom",
            "Backer",
            "Sabo",
            "Selvig",
            "Overbey",
            "Bentzen",
            "Hamar",
            "Jorde",
            "Arvesen",
            "Helland",
            "Haarstad",
            "Bjorgen",
            "Ulven",
            "Bjelland",
            "Solem",
            "Sund"
          ];

          var suffix = [
            "the Shackled",
            "the Lonely",
            "the Ambitious",
            "the Small",
            "the Giant",
            "the Weak",
            "the Meek",
            "the Righteous",
            "the Young",
            "the Fat",
            "the Cold",
            "the Bloody",
            "the Ill",
            "the Coward",
            "the Silent",
            "of Oakburn",
            "of Karmswald",
            "of The Reich",
            "of Faykeep",
            "of Westerheim",
            "of the Barrows",
            "of Allenfel",
            "of the Chase",
            "of Ernst",
            "of the Hills",
            "of Bellagin",
            "of Oftburg",
            "of Thurderry",
            "of the Ward",
            "the Civilized",
            "of Hooftheim",
            "the Plauged",
            "the Cleaver",
            "the Fleshling",
            "the Mongrel",
            "the Wyrm",
            "of the Crow",
            "the Tongue Splitter",
            "the Charming",
            "the Acolyte",
            "the Betrothed",
            "the Liar",
            "the Keeper",
            "of the Void",
            "the Old",
            "the Blind",
            "the Gored",
            "Toad-Bane",
            "Toad-Bane",
            "the Forgivable",
            "the Splintered",
            "the Keeper of Lies",
            "the Drowning God",
            "the Swine",
            "of the Wilds",
            "Thrice-Burried",
            "the Breath of the Gods",
            "the Cherished",
            "the Vulgar",
            "the Invincible",
            "the Blasphemer",
            "the Unbroken",
            "the Unshackeled",
            "the Mad",
            "the Seer",
            "Black-Lungs",
            "the Long Traveled",
            "the Weary",
            "of the Fourth Blight",
            "of the Final Hour",
            "of the First Hour",
            "the First Born",
            "the Last Born",
            "the Elder",
            "the Senseless",
            "the Reader",
            "the Dark",
            "the Enlightened",
            "the Dull",
            "follower of Kor",
            "of the Tweleve",
            "the the First",
            "the the Second",
            "the the Third",
            "the the Fourth",
            "the the Fifth",
            "the the Sixth",
            "the Godless",
            "the Hefty",
            "the Contagious",
            "the Inverted",
            "the Vessel",
            "the Pastel",
            "Pact-Bound",
            "of Woe",
            "the Herald",
            "the Cursed",
            "the Crimson",
            "the White",
            "the Black"

          ];

          var prefix = [
            "Master",
            "Protector",
            "Tribune",
            "Saint",
            "Assistant",
            "Baroness",
            "Duchess",
            "Greve",
            "Templar",
            "Professor",
            "Assistant",
            "Librarian",
            "Madame",
            "Lady",
            "Imperator",
            "Governess",
            "Princess",
            "Corporal",
            "General",
            "Commander",
            "Exarch"
          ];

          //Finds first name for a female
          var randomSelection = Math.floor(Math.random() * firstName.length);
          var names = firstName[randomSelection];

          //Finds last name
          randomSelection = Math.floor(Math.random() * lastName.length);
          names = (names + " " + lastName[randomSelection]);

          //Adds prefix
          randomSelection = (Math.floor(Math.random() * 100) - 1);
          if ( randomSelection <= 5)
          {
            randomSelection = Math.floor(Math.random() * prefix.length);
            names = (prefix[randomSelection] + " " + names);
          }

          //Adds suffix
          randomSelection = (Math.floor(Math.random() * 100) - 1);
          if ( randomSelection <= 10)
          {
            randomSelection = Math.floor(Math.random() * suffix.length);
            names = (names + " " + suffix[randomSelection]);
          }
          return names;
        });
    });
});

  });
