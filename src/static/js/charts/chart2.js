  $(document).ready(function() {

      if ($('#hmda_chart_2').length !== 0) {
          var originationsByTypeChart = new Highcharts.Chart(chart2_options);
      }

      if ($('#hmda_chart_2_msa').length !== 0) {
          $('#hmda_chart_2_msa').chosen({
              width: '100%'
          });
      }

      var chart2DataObj = {
        "U.S. Total":{"name":"U.S. Total","data":[[62.430214077318546,63.72718822872299,60.95191810341459],[23.64733578575852,21.249374934461745,25.291430768100838],[9.090600446212047,10.260276933458787,10.150157283073591],[4.83184969071088,4.763159903356486,3.6064938454109754]]},
        "Alabama":{"name":"Alabama","data":[[55.20679369003789,57.30447745301602,53.5846609855502],[22.998575689984143,20.41207474844274,26.26667284179326],[12.394184515331489,13.057019645424054,12.956187476843276],[9.400446104646477,9.22642815311718,7.192478695813264]]},
        "Alaska":{"name":"Alaska","data":[[47.210796915167094,48.1789293571254,43.17463898916967],[22.017994858611825,19.652896602297727,24.582581227436823],[26.195372750642676,27.646052309948665,27.425541516245488],[4.5758354755784065,4.522121730628208,4.8172382671480145]]},
        "Arizona":{"name":"Arizona","data":[[51.13538582700132,50.65121637189131,50.15122509317052],[32.54189333061093,31.77881683268957,35.00945864814962],[12.834162206309157,13.962187436470828,13.076722663374074],[3.48855863607858,3.607779358948296,1.762593595305792]]},
        "Arkansas":{"name":"Arkansas","data":[[55.54785586173162,55.905643775924915,53.292264561584716],[20.764715473667046,19.051409896509824,25.257294625401162],[9.44073047448231,10.931411572464071,11.055369065623962],[14.246698190119028,14.111534755101186,10.395071747390165]]},
        "California":{"name":"California","data":[[66.10909889976662,67.14789934247788,64.24549378784661],[25.55125329615373,23.00877321300641,26.408138645423694],[6.970796835692419,8.563541092319406,8.47393658784797],[1.3688509683872336,1.2797863521963038,0.8724309788817114]]},
        "Colorado":{"name":"Colorado","data":[[63.54620664457029,64.28919182083739,62.7475435438041],[22.201633739593394,20.09858812074002,22.63735548662777],[12.331341180155023,13.62950340798442,13.044704249181184],[1.9208184356812903,1.9827166504381692,1.5703967203869598]]},
        "Connecticut":{"name":"Connecticut","data":[[69.95158074622616,73.03391587677726,68.59083771420768],[23.22344061520934,19.26466232227488,24.29166382194306],[4.176160637994873,4.965195497630331,5.12732982863385],[2.6488180005696385,2.736226303317536,1.9901686352154022]]},
        "Delaware":{"name":"Delaware","data":[[54.95961635537607,57.46321784527765,52.60109733793944],[25.959111559818272,22.271001423825343,29.54684007315586],[9.729934376577486,12.33981964878975,11.562690510058932],[9.351337708228167,7.925961082107262,6.289372078845763]]},
        "District of Columbia":{"name":"District of Columbia","data":[[82.81592975854501,86.01091239769627,84.84007594566964],[12.402006898714331,9.154289178538951,10.165035782094348],[4.7820633427406705,4.834798423764777,4.9948882722360155],[0,0,0]]},
        "Florida":{"name":"Florida","data":[[57.849896972578854,59.8047488390547,56.71279770077068],[27.383499762244412,24.34268981665167,28.708331045087593],[11.992788080519892,13.290378823016614,13.005931132956231],[2.7738151846568395,2.5621825212770117,1.5729401211854943]]},
        "Georgia":{"name":"Georgia","data":[[55.0160913737616,56.114624727150606,53.02859018306469],[27.956080015144824,25.42116751553143,30.733535117788634],[11.953051050672052,13.657581015279566,12.859200641820436],[5.0747775604215315,4.806626742038395,3.378674057326234]]},
        "Hawaii":{"name":"Hawaii","data":[[66.3731710475204,63.624161073825505,63.80407810982847],[5.127541110967241,4.368517388651616,6.171107994389901],[21.041046225560013,25.67419158023185,25.385694249649372],[7.458241615952351,6.333129957291031,4.6391196461322695]]},
        "Idaho":{"name":"Idaho","data":[[61.03464097270016,58.961567828964114,55.596486256729946],[21.254874971323698,21.654364978365997,27.531069100918913],[10.914200504702913,12.486637821328582,11.901388495324454],[6.796283551273227,6.897429371341309,4.971056147026677]]},
        "Illinois":{"name":"Illinois","data":[[71.15858901792548,72.44917433860752,70.0311002636584],[21.835637408222855,19.482337117046704,22.49667365946436],[4.223874814555831,4.871265892959385,5.079709730872522],[2.781898759295832,3.197222651386402,2.392516346004718]]},
        "Indiana":{"name":"Indiana","data":[[60.27244378795339,62.125853248954336,58.80016527383475],[26.299031675693417,23.70438325066472,27.983259359963746],[6.32365009026752,6.880412980268375,6.946832473642822],[7.104874446085672,7.289350520112574,6.2697428925586784]]},
        "Iowa":{"name":"Iowa","data":[[73.76802381987889,73.96785679915311,72.14075408055342],[14.231708541032418,12.959933275591057,15.833404796615499],[5.188852831956107,6.441471786481891,6.731841180001714],[6.811414807132582,6.630738138773939,5.293999942829374]]},
        "Kansas":{"name":"Kansas","data":[[63.97215459525258,64.40901056748524,63.10430876726002],[20.891661594643942,20.232409461847993,23.217434703044418],[9.31223371880706,10.770561468165921,10.154716353352187],[5.8239500912964095,4.588018502500846,3.5235401763433707]]},
        "Kentucky":{"name":"Kentucky","data":[[60.18002812939521,60.733582131120144,58.56646331089128],[21.28551336146273,18.941124046120425,24.07943027975597],[8.41068917018284,9.360552553890715,8.827747125878036],[10.123769338959212,10.964741268868712,8.52635928347471]]},
        "Louisiana":{"name":"Louisiana","data":[[55.42478065482559,57.71733166104883,55.22120080436657],[22.30365931949497,19.95505735413237,25.301637460499855],[8.21741921677723,9.505892189908808,9.67394426888825],[14.054140808902204,12.821718794909984,9.803217466245332]]},
        "Maine":{"name":"Maine","data":[[60.40758389942208,62.07188558524652,59.149331980382215],[12.68376761634391,11.874294316898757,17.901234567901234],[7.786677481496502,9.013925479864508,9.58904109589041],[19.121971002737503,17.039894617990214,13.360392355826145]]},
        "Maryland":{"name":"Maryland","data":[[56.16556481747629,58.243565344321055,53.04881970798224],[26.88320398581968,24.363925278542524,31.01884607962951],[12.5361693973364,13.273960200291937,12.336785231877533],[4.415061799367635,4.1185491768444775,3.595548980510709]]},
        "Massachusetts":{"name":"Massachusetts","data":[[81.14886327728716,81.50767178118747,77.98807363235676],[13.748773470372033,12.646764509673114,16.59930759962787],[3.3993580468659053,4.0126751167444965,4.16050267656972],[1.7030052054748956,1.8328885923949298,1.2521160914456526]]},
        "Michigan":{"name":"Michigan","data":[[62.0519293184277,63.752980933328814,62.70776372469954],[27.4468085106383,23.673414030447905,26.061684926926176],[4.33826181031374,5.451010974355497,5.62265190109955],[6.163000360620266,7.122594061867788,5.60789944727473]]},
        "Minnesota":{"name":"Minnesota","data":[[66.48011930095005,68.67148964156527,66.01119304531377],[22.59010405321627,18.84084182834594,23.13460817397825],[5.417134431393576,6.356461690233475,6.200613812162368],[5.512642214440107,6.13120683985531,4.653584968545599]]},
        "Mississippi":{"name":"Mississippi","data":[[55.093903496099394,55.1929122606459,50.876379008145165],[21.005489742848887,20.228636753358103,26.71409423651923],[9.494365790234037,11.094598456701915,11.135168574079803],[14.406240970817683,13.483852529294085,11.274358181255801]]},
        "Missouri":{"name":"Missouri","data":[[59.642903785518385,60.862134105751764,58.43087921697375],[23.08811731562156,20.806721479589083,25.574152769893992],[8.238959682083621,9.439936671284386,9.243207584799718],[9.030019216776433,8.891207743374773,6.751760428332541]]},
        "Montana":{"name":"Montana","data":[[60.053180609531594,60.25913749758267,58.425306335274186],[15.790550214767846,14.716689228389093,18.727730946380465],[12.620167723460831,13.691742409591956,14.017554532023984],[11.536101452239722,11.33243086443628,8.82940818632137]]},
        "Nebraska":{"name":"Nebraska","data":[[63.55291878882857,65.81531362343725,62.449073014419774],[22.768231935971343,19.450555346890592,23.176928358892194],[10.4382380925729,11.391318345227235,11.311512932021058],[3.24061118262719,3.3428126844449215,3.0624856946669716]]},
        "Nevada":{"name":"Nevada","data":[[45.33751002788708,46.501301996394474,45.05007075214978],[37.876762043014864,35.7080857314549,38.0809839991292],[14.218588837529127,15.617279829071244,15.228039621203877],[2.5671390915689347,2.1733324430793886,1.6409056275171439]]},
        "New Hampshire":{"name":"New Hampshire","data":[[63.25213049840751,64.96014462979703,62.23771397018222],[21.8817250581045,19.631851425753965,24.378796245168417],[7.71283463889128,8.940751088832279,8.586416344561016],[7.153309804596712,6.4672528556167315,4.797073440088349]]},
        "New Jersey":{"name":"New Jersey","data":[[72.84517827231394,74.26388642126855,69.83857869466725],[21.788306612427217,20.254227706620583,25.204804171593842],[3.2862726330063015,3.713275079547106,3.852455512972118],[2.0802424822525327,1.7686107925637586,1.1041616207667868]]},
        "New Mexico":{"name":"New Mexico","data":[[51.694203304396524,53.80855965928926,50.816351583599314],[30.04760571268552,27.096278712560217,30.94770439479499],[15.884906188742647,16.99364658241988,16.431377363123005],[2.373284794175301,2.101515045730643,1.8045666584826907]]},
        "New York":{"name":"New York","data":[[73.2307107563664,75.14887250607794,72.63347763347764],[20.9036488027366,18.470033563983186,21.408730158730158],[3.768529076396807,4.239298404480447,4.351551226551226],[2.0971113645001904,2.141795525458429,1.6062409812409812]]},
        "North Carolina":{"name":"North Carolina","data":[[63.39556316684881,65.97418230117881,64.28888612586368],[16.354766384623183,13.612402457247219,17.18502992948365],[12.71787013981996,13.797111074215508,13.200056839375476],[7.531800308708046,6.61630416735846,5.326027105277181]]},
        "North Dakota":{"name":"North Dakota","data":[[65.71268237934905,67.5082690187431,63.75219683655536],[19.438832772166105,17.100330760749724,21.188488576449913],[10.763187429854097,11.278941565600881,11.083040421792619],[4.085297418630752,4.112458654906284,3.9762741652021085]]},
        "Ohio":{"name":"Ohio","data":[[63.57875019511942,64.37594946829776,61.733947057474914],[25.862948124252043,23.625769569041335,26.697000158721764],[6.35412872678079,7.3678739905652835,7.58160943865404],[4.204172953847754,4.630406972095626,3.9874433451492863]]},
        "Oklahoma":{"name":"Oklahoma","data":[[52.81724226290465,53.404020930873045,51.929260450160776],[28.693448737294652,27.039383090057832,30.260504659654476],[11.99783617572531,13.277334067749932,13.10153141860592],[6.491472824075392,6.279261911319196,4.708703471578833]]},
        "Oregon":{"name":"Oregon","data":[[65.01424948361964,67.12892843619841,64.0493968983343],[19.164901822365152,16.42370314274896,21.35554279149914],[9.781159306612283,10.703805376751232,10.45184759716638],[6.039689387402934,5.743563044301401,4.1432127130001914]]},
        "Pennsylvania":{"name":"Pennsylvania","data":[[66.24403849429399,66.93161445433536,63.479239296847624],[23.743825583375916,21.348850223323005,26.051869477800526],[5.304675523760858,6.321440044768231,6.482762437053843],[4.707460398569239,5.398095277573396,3.9861287882980094]]},
        "Rhode Island":{"name":"Rhode Island","data":[[62.292590246991765,66.27906976744185,58.29533116178067],[29.803673210892974,25.25839793281654,33.51791530944625],[5.826472450918303,6.782945736434108,6.883821932681868],[2.07726409119696,1.6795865633074936,1.3029315960912053]]},
        "South Carolina":{"name":"South Carolina","data":[[58.3517095444927,60.245137223554494,57.934556136216145],[19.890856442811003,17.713009079915555,22.23930047477542],[13.099454282214055,14.251163172026482,13.905113228814429],[8.657979730482236,7.790690524503474,5.921030160194009]]},
        "South Dakota":{"name":"South Dakota","data":[[56.94985115640028,58.36869401225837,56.863774813570004],[17.678039844286698,13.90853371051391,19.567272345341877],[10.991527364323334,12.989156058462989,12.204600357105345],[14.380581634989694,14.733616218764734,11.364352483982774]]},
        "Tennessee":{"name":"Tennessee","data":[[55.67873860556788,57.41742862474343,54.521583022962936],[23.958282007062497,20.49511724824283,25.248519600225073],[11.373901617804057,12.275300118181253,11.786929610674955],[8.989077769565574,9.812154008832493,8.442967766137027]]},
        "Texas":{"name":"Texas","data":[[59.158849280800496,61.64147879499537,58.71357831999282],[27.462867417135712,24.318218133038037,27.720878194990227],[10.541744840525329,11.727502777664235,12.056189009440804],[2.8365384615384617,2.312800294302351,1.5093544755761514]]},
        "Utah":{"name":"Utah","data":[[57.00187685415027,59.54172001707213,54.933851460507356],[30.235514924017682,26.261737089201876,32.648561323844035],[7.386329236544166,8.440034144259496,7.926909138540802],[5.376278985287885,5.756508749466496,4.490678077107803]]},
        "Vermont":{"name":"Vermont","data":[[72.17451844975632,72.88930581613509,73.256054647071],[9.050823857043397,9.615384615384617,11.426205754502174],[6.42840566256672,7.0356472795497185,7.017180707927966],[12.346252030633558,10.45966228893058,8.300558890498861]]},
        "Virginia":{"name":"Virginia","data":[[54.77020345302748,56.426094495015164,53.49870496325465],[20.652161326555426,17.810528343688294,22.602076270294173],[20.464572308618674,21.43717189230843,20.404725304807428],[4.113062911798423,4.326205268988104,3.494493461643749]]},
        "Washington":{"name":"Washington","data":[[64.22337169359905,65.55253916465344,63.27944329983601],[19.04112701658714,16.819008243879356,20.70386410461254],[12.78452758063007,13.929914572488855,13.513854433839297],[3.9509737091837414,3.6985380189783568,2.5028381617121473]]},
        "West Virginia":{"name":"West Virginia","data":[[62.24822864421623,62.14105396023982,60.647244330980634],[15.476474802961548,13.931839697065321,17.157230815437753],[8.645808454740864,9.49826443673083,10.211743505030785],[13.629488098081364,14.428841905964026,11.983781348550833]]},
        "Wisconsin":{"name":"Wisconsin","data":[[76.30979498861048,76.23410767540418,75.58796257270505],[12.921005532053368,12.011458169832052,14.116159487482088],[5.318499837292548,5.9350965311568045,6.256427547837815],[5.450699642043606,5.819337623606969,4.039450391975048]]},
        "Wyoming":{"name":"Wyoming","data":[[51.49442379182156,50.463613374543414,47.92358803986711],[19.271375464684017,19.499859511098624,25.152270210409743],[13.382899628252787,15.425681371171676,15.83610188261351],[15.851301115241636,14.610845743186287,11.088039867109636]]},
        "Puerto Rico":{"name":"Puerto Rico","data":[[36.19723571161748,33.91220967398253,27.027305512622355],[35.56219648860665,36.06435116130407,51.7671303451829],[5.491221516623086,6.349882804176434,6.666666666666667],[22.749346283152782,23.67355636053697,14.538897475528078]]}
      };

      //conventional_checkbox
      //fha_checkbox
      //va_checkbox
      //rhs_checkbox

      var $conventional_checkbox = $("#conventional_checkbox");
      $conventional_checkbox.click(function() {
          var series = originationsByTypeChart.series[0];
          if (series.visible) {
              series.hide();
              $conventional_checkbox.removeAttr("checked");

          } else {
              series.show();
              $conventional_checkbox.attr("checked");
          }
      });

      var $fha_checkbox = $("#fha_checkbox");
      $fha_checkbox.click(function() {
          var series = originationsByTypeChart.series[1];
          if (series.visible) {
              series.hide();
              $fha_checkbox.removeAttr("checked");

          } else {
              series.show();
              $fha_checkbox.attr("checked");
          }
      });

      var $va_checkbox = $("#va_checkbox");
      $va_checkbox.click(function() {
          var series = originationsByTypeChart.series[2];
          if (series.visible) {
              series.hide();
              $va_checkbox.removeAttr("checked");

          } else {
              series.show();
              $va_checkbox.attr("checked");
          }
      });

      var $rhs_checkbox = $("#rhs_checkbox");
      $rhs_checkbox.click(function() {
          var series = originationsByTypeChart.series[3];
          if (series.visible) {
              series.hide();
              $rhs_checkbox.removeAttr("checked");

          } else {
              series.show();
              $rhs_checkbox.attr("checked");
          }
      });


      var $msa = $('#hmda_chart_2_msa');
      $msa.change(function() {
          var msaID = $msa.val();
          var msaName = chart2DataObj[msaID].name.replace("&apos;", "’").toUpperCase();
          //console.log(msaName);
          // Update the chart name from the chart data object:
          originationsByTypeChart.setTitle({
              text: msaName
          });
          for (var i = 0; i < 4; i++) {
              originationsByTypeChart.series[i].setData(chart2DataObj[msaID].data[i]);
          }
      });

  });
