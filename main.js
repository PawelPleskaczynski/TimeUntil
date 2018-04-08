$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function nextMinute() {
    var d = new Date();
    var progress_minute = document.getElementById("progress_minute");
    var minute_text = document.getElementById("minute_text");
    var seconds_now = d.getSeconds();
    var seconds_until = seconds_now/60*100
    var seconds_text = 60-seconds_now;
    progress_minute.setAttribute('aria-valuenow', seconds_until);
    progress_minute.setAttribute('style', "width: " + seconds_until + "%");
    minute_text.innerHTML = "🕔 Time until next minute: " + seconds_text + " seconds";
}

function nextHour() {
    var d = new Date();
    var progress_hour = document.getElementById("progress_hour");
    var hour_text = document.getElementById("hour_text");
    var minutes_now = d.getMinutes();
    var minutes_until = minutes_now/60*100
    var hours_text = 60-minutes_now;
    progress_hour.setAttribute('aria-valuenow', minutes_until);
    progress_hour.setAttribute('style', "width: " + minutes_until + "%");
    hour_text.innerHTML = "🕔 Time until next hour: " + hours_text + " minutes";
}

function nextDay() {
    var d = new Date();
    var progress_day = document.getElementById("progress_day");
    var day_text = document.getElementById("day_text");
    var hours_now = d.getHours();
    var hours_until = hours_now/24*100
    var days_text = 24-hours_now;
    progress_day.setAttribute('aria-valuenow', hours_until);
    progress_day.setAttribute('style', "width: " + hours_until + "%");
    day_text.innerHTML = "🕔 Time until next day: " + days_text + " hours";
}

function nextMonth() {
    var d = new Date();
    var progress_month = document.getElementById("progress_month");
    var month_text = document.getElementById("month_text");
    var day_now = d.getDate();
    var month_now = d.getMonth();
    month_now = month_now + 1;
    var year_now = d.getYear();
    var number_of_days_in_month = daysInMonth(month_now, year_now);
    var days_until = day_now/number_of_days_in_month*100;
    var months_text = number_of_days_in_month-day_now;
    progress_month.setAttribute('aria-valuenow', days_until);
    progress_month.setAttribute('style', "width: " + days_until + "%");
    month_text.innerHTML = "🗓️ Time until next month: " + months_text + " days";
}

function nextYear() {
    var d = new Date();
    var progress_year = document.getElementById("progress_year");
    var year_text = document.getElementById("year_text");
    var day_of_year_now = dayOfYear();
    var year = d.getFullYear();
    if (isLeap(year)) { //leap
      var days_until_new_year = day_of_year_now/366*100;
      var days_until_new_year_text = 366-day_of_year_now;
      progress_year.setAttribute('aria-valuenow', days_until_new_year);
      progress_year.setAttribute('style', "width: " + days_until_new_year + "%");
      year_text.innerHTML = "🗓️ Time until next year: " + days_until_new_year_text + " days";
    } else { //not leap
      var days_until_new_year = day_of_year_now/365*100;
      var days_until_new_year_text = 365-day_of_year_now;
      progress_year.setAttribute('aria-valuenow', days_until_new_year);
      progress_year.setAttribute('style', "width: " + days_until_new_year + "%");
      year_text.innerHTML = "🗓️ Time until next year: " + days_until_new_year_text + " days";
    }
}

function antares() {
   var d = new Date();
   var tooltip_antares = document.getElementById("tooltip_antares");
   var progress_antares = document.getElementById("progress_antares");
   var antares_text = document.getElementById("antares_text");
   var year = d.getFullYear();
   var date_antares = 12000;
   var years_percent_antares = year/date_antares*100;
   var year_round_thousand = Math.round(year/1000)*1000;
   var years_until_antares = date_antares-year_round_thousand;
   progress_antares.setAttribute('aria-valuenow', years_percent_antares);
   progress_antares.setAttribute('style', "width: " + years_percent_antares + "%");
   antares_text.innerHTML = "💥 Estimated Antares explosion in " + years_until_antares + " years";
   tooltip_antares.setAttribute('data-original-title',"Counting from the year 0. " + years_percent_antares.toFixed(4) + "% time elapsed between year 0 and this event.");
}

function venus_mercury() {
   var d = new Date();
   var tooltip_venus_mercury = document.getElementById("tooltip_venus_mercury");
   var progress_venus_mercury = document.getElementById("progress_venus_mercury");
   var venus_mercury_text = document.getElementById("venus_mercury_text");
   var year = d.getFullYear();
   var date_venus_mercury = 13425;
   var years_percent_venus_mercury = year/date_venus_mercury*100;
   var years_until_venus_mercury = date_venus_mercury-year;
   progress_venus_mercury.setAttribute('aria-valuenow', years_percent_venus_mercury);
   progress_venus_mercury.setAttribute('style', "width: " + years_percent_venus_mercury + "%");
   venus_mercury_text.innerHTML = "☀️ Simultaneous Venus and Mercury solar transit in " + years_until_venus_mercury + " years";
   tooltip_venus_mercury.setAttribute('data-original-title',"Counting from the year 0. " + years_percent_venus_mercury.toFixed(4) + "% time elapsed between year 0 and this event.");
}

function vega() {
   var d = new Date();
   var tooltip_vega = document.getElementById("tooltip_vega");
   var progress_vega = document.getElementById("progress_vega");
   var vega_text = document.getElementById("vega_text");
   var year = d.getFullYear();
   var date_vega = 13727;
   var years_percent_vega = year/date_vega*100;
   var years_until_vega = date_vega-year;
   progress_vega.setAttribute('aria-valuenow', years_percent_vega);
   progress_vega.setAttribute('style', "width: " + years_percent_vega + "%");
   vega_text.innerHTML = "🌟 Vega is polar star in " + years_until_vega + " years";
   tooltip_vega.setAttribute('data-original-title',"Counting from the year 0. " + years_percent_vega.toFixed(4) + "% time elapsed between year 0 and this event.");
}

function arecibo() {
   var d = new Date();
   var tooltip_arecibo = document.getElementById("tooltip_arecibo");
   var progress_arecibo = document.getElementById("progress_arecibo");
   var arecibo_text = document.getElementById("arecibo_text");
   var year_arecibo = 1974;
   var date_arecibo = 27000;
   var years_percent_arecibo = year_arecibo/date_arecibo*100;
   var years_until_arecibo = date_arecibo-year_arecibo;
   progress_arecibo.setAttribute('aria-valuenow', years_percent_arecibo);
   progress_arecibo.setAttribute('style', "width: " + years_percent_arecibo + "%");
   arecibo_text.innerHTML = "👽 The Arecibo message will reach its destination, the globular cluster M13, in " + years_until_arecibo + " years";
   tooltip_arecibo.setAttribute('data-original-title',"Counting from 1974. " + years_percent_arecibo.toFixed(4) + "% time elapsed between 1974 and this event.");
}

function polaris() {
   var d = new Date();
   var tooltip_polaris = document.getElementById("tooltip_polaris");
   var progress_polaris = document.getElementById("progress_polaris");
   var polaris_text = document.getElementById("polaris_text");
   var year = d.getFullYear();
   var date_polaris = 27800;
   var year_round_thousand_polaris = Math.round(year/1000)*1000;
   var years_percent_polaris = year_round_thousand_polaris/date_polaris*100;
   var years_until_polaris = date_polaris-year_round_thousand_polaris;
   progress_polaris.setAttribute('aria-valuenow', years_percent_polaris);
   progress_polaris.setAttribute('style', "width: " + years_percent_polaris + "%");
   polaris_text.innerHTML = "🌟 Polaris is polar star again in " + years_until_polaris + " years";
   tooltip_polaris.setAttribute('data-original-title',"Counting from the year 0. " + years_percent_polaris.toFixed(4) + "% time elapsed between year 0 and this event.");
}

function ross248() {
  var d = new Date();
  var tooltip_ross248 = document.getElementById("tooltip_ross248");
  var progress_ross248 = document.getElementById("progress_ross248");
  var ross248_text = document.getElementById("ross248_text");
  var year = d.getFullYear();
  var date_ross = 38000;
  var year_round_thousand_ross = Math.round(year/1000)*1000;
  var years_percent_ross = year_round_thousand_ross/date_ross*100;
  var years_until_ross = date_ross-year_round_thousand_ross;
  progress_ross248.setAttribute('aria-valuenow', years_percent_ross);
  progress_ross248.setAttribute('style', "width: " + years_percent_ross + "%");
  ross248_text.innerHTML = "🌟 Small red dwarf Ross 248 will pass within 3.024 light-years of Earth in " + years_until_ross + " years";
  tooltip_ross248.setAttribute('data-original-title',"Counting from the year 0. " + years_percent_ross.toFixed(4) + "% time elapsed between year 0 and this event.");
}

function uranus_neptune() {
  var d = new Date();
  var tooltip_uranus_neptune = document.getElementById("tooltip_uranus_neptune");
  var progress_uranus_neptune = document.getElementById("progress_uranus_neptune");
  var uranus_neptune_text = document.getElementById("uranus_neptune_text");
  var year = d.getFullYear();
  var date_uranus_neptune = 38172;
  var years_percent_uranus_neptune = year/date_uranus_neptune*100;
  var years_until_uranus_neptune = date_uranus_neptune-year;
  progress_uranus_neptune.setAttribute('aria-valuenow', years_percent_uranus_neptune);
  progress_uranus_neptune.setAttribute('style', "width: " + years_percent_uranus_neptune + "%");
  uranus_neptune_text.innerHTML = "🌐 A transit of Uranus from Neptune, the rarest of all planetary transits, in " + years_until_uranus_neptune + " years";
  tooltip_uranus_neptune.setAttribute('data-original-title',"Counting from the year 0. " + years_percent_uranus_neptune.toFixed(4) + "% time elapsed between year 0 and this event.");
}

function mars_plants() {
  var d = new Date();
  var tooltip_mars_plants = document.getElementById("tooltip_mars_plants");
  var progress_mars_plants = document.getElementById("progress_mars_plants");
  var mars_plants_text = document.getElementById("mars_plants_text");
  var year_mars = d.getFullYear()-1000;
  var date_mars_plants = 102000;
  var years_percent_mars_plants = year_mars/date_mars_plants*100;
  progress_mars_plants.setAttribute('aria-valuenow', years_percent_mars_plants);
  progress_mars_plants.setAttribute('style', "width: " + years_percent_mars_plants + "%");
  mars_plants_text.innerHTML = "🌱 Time required to terraform Mars using plants: " + date_mars_plants + " years";
  tooltip_mars_plants.setAttribute('data-original-title',"Counting assuming we started this process 1000 years ago. " + years_percent_mars_plants.toFixed(4) + "% time would have elapsed between year " + year_mars + " and this event.");
}

function loihi() {
  var d = new Date();
  var tooltip_loihi = document.getElementById("tooltip_loihi");
  var progress_loihi = document.getElementById("progress_loihi");
  var loihi_text = document.getElementById("loihi_text");
  var year = d.getFullYear();
  var date_loihi = 250000;
  var year_round_thousand_loihi = Math.round(year/1000)*1000;
  var years_percent_loihi = year_round_thousand_loihi/date_loihi*100;
  var years_until_loihi = date_loihi-year_round_thousand_loihi;
  progress_loihi.setAttribute('aria-valuenow', years_percent_loihi);
  progress_loihi.setAttribute('style', "width: " + years_percent_loihi + "%");
  loihi_text.innerHTML = "🌋 Lōʻihi will rise above the surface of the ocean and become a volcanic island in " + years_until_loihi + " years";
  tooltip_loihi.setAttribute('data-original-title',"Counting from the year 0. " + years_percent_loihi.toFixed(4) + "% time elapsed between year 0 and this event.");
}

function venus_earth() {
  var d = new Date();
  var tooltip_venus_earth = document.getElementById("tooltip_venus_earth");
  var progress_venus_earth = document.getElementById("progress_venus_earth");
  var venus_earth_text = document.getElementById("venus_earth_text");
  var year = d.getFullYear();
  var date_venus_earth = 571741;
  var years_percent_venus_earth = year/date_venus_earth*100;
  var years_until_venus_earth = date_venus_earth-year;
  progress_venus_earth.setAttribute('aria-valuenow', years_percent_venus_earth);
  progress_venus_earth.setAttribute('style', "width: " + years_percent_venus_earth + "%");
  venus_earth_text.innerHTML = "🌍 A simultaneous transit of Venus and the Earth will be seen from Mars in " + years_until_venus_earth + " years";
  tooltip_venus_earth.setAttribute('data-original-title',"Counting from the year 0. " + years_percent_venus_earth.toFixed(4) + "% time elapsed between year 0 and this event.");
}

function glass() {
  var d = new Date();
  var tooltip_glass = document.getElementById("tooltip_glass");
  var progress_glass = document.getElementById("progress_glass");
  var glass_text = document.getElementById("glass_text");
  var year = d.getFullYear();
  var date_glass = 1000000;
  var year_round_thousand_glass = Math.round(year/1000)*1000;
  var years_percent_glass = year_round_thousand_glass/date_glass*100;
  var years_until_glass = date_glass-year_round_thousand_glass;
  progress_glass.setAttribute('aria-valuenow', years_percent_glass);
  progress_glass.setAttribute('style', "width: " + years_percent_glass + "%");
  glass_text.innerHTML = "🥂 Current glass objects in the environment will be decomposed in about " + years_until_glass + " years";
  tooltip_glass.setAttribute('data-original-title',"Counting from the year 0. " + years_percent_glass.toFixed(4) + "% time elapsed between year 0 and this event.");
}

function gliese() {
  var d = new Date();
  var tooltip_gliese = document.getElementById("tooltip_gliese");
  var progress_gliese = document.getElementById("progress_gliese");
  var gliese_text = document.getElementById("gliese_text");
  var year_gliese = 3300000;
  var date_gliese = 1400000 + 3300000;
  var years_percent_gliese = year_gliese/date_gliese*100;
  var years_until_gliese = date_gliese-year_gliese;
  progress_gliese.setAttribute('aria-valuenow', years_percent_gliese);
  progress_gliese.setAttribute('style', "width: " + years_percent_gliese + "%");
  gliese_text.innerHTML = "🌟 Star Gliese 710 will pass 0.14 light-years away from the Sun in " + years_until_gliese + " years";
  tooltip_gliese.setAttribute('data-original-title',"Counting from the first use of stone tools by humans. " + years_percent_gliese.toFixed(4) + "% time elapsed between the first use of stone tools and this event.");
}

function rushmore() {
  var d = new Date();
  var tooltip_rushmore = document.getElementById("tooltip_rushmore");
  var progress_rushmore = document.getElementById("progress_rushmore");
  var rushmore_text = document.getElementById("rushmore_text");
  var year_rushmore = 3300000;
  var date_rushmore = 7200000 + 3300000;
  var years_percent_rushmore = year_rushmore/date_rushmore*100;
  var years_until_rushmore = date_rushmore-year_rushmore;
  progress_rushmore.setAttribute('aria-valuenow', years_percent_rushmore);
  progress_rushmore.setAttribute('style', "width: " + years_percent_rushmore + "%");
  rushmore_text.innerHTML = "🏔️ Mount Rushmore will erode in " + years_until_rushmore + " years";
  tooltip_rushmore.setAttribute('data-original-title',"Counting from the first use of stone tools by humans. " + years_percent_rushmore.toFixed(4) + "% time elapsed between the first use of stone tools and this event.");
}

function phobos() {
  var d = new Date();
  var tooltip_phobos_mars = document.getElementById("tooltip_phobos_mars");
  var progress_phobos_mars = document.getElementById("progress_phobos_mars");
  var phobos_mars_text = document.getElementById("phobos_mars_text");
  var year_phobos_mars = 4600000000;
  var date_phobos_mars = 50000000 + 4600000000;
  var years_percent_phobos_mars = year_phobos_mars/date_phobos_mars*100;
  var years_until_phobos_mars = date_phobos_mars-year_phobos_mars;
  progress_phobos_mars.setAttribute('aria-valuenow', years_percent_phobos_mars);
  progress_phobos_mars.setAttribute('style', "width: " + years_percent_phobos_mars + "%");
  phobos_mars_text.innerHTML = "💥 Phobos will collide with Mars in " + years_until_phobos_mars + " years";
  tooltip_phobos_mars.setAttribute('data-original-title',"Counting from the beginning of the Solar System. " + years_percent_phobos_mars.toFixed(4) + "% time elapsed between formation of the Solar System and this event.");
}

function orbit() {
  var d = new Date();
  var tooltip_orbit = document.getElementById("tooltip_orbit");
  var progress_orbit = document.getElementById("progress_orbit");
  var orbit_text = document.getElementById("orbit_text");
  var year_orbit = 4600000000;
  var date_orbit = 240000000 + 4600000000;
  var years_percent_orbit = year_orbit/date_orbit*100;
  var years_until_orbit = date_orbit-year_orbit;
  progress_orbit.setAttribute('aria-valuenow', years_percent_orbit);
  progress_orbit.setAttribute('style', "width: " + years_percent_orbit + "%");
  orbit_text.innerHTML = "🌌 The Solar System will complete one full orbit around the Galactic center in " + years_until_orbit + " years";
  tooltip_orbit.setAttribute('data-original-title',"Counting from the beginning of the Solar System. " + years_percent_orbit.toFixed(4) + "% time elapsed between formation of the Solar System and this event.");
}

function luminosity() {
  var d = new Date();
  var tooltip_luminosity = document.getElementById("tooltip_luminosity");
  var progress_luminosity = document.getElementById("progress_luminosity");
  var luminosity_text = document.getElementById("luminosity_text");
  var year_luminosity = 4600000000;
  var date_luminosity = 1000000000 + 4600000000;
  var years_percent_luminosity = year_luminosity/date_luminosity*100;
  var years_until_luminosity = date_luminosity-year_luminosity;
  progress_luminosity.setAttribute('aria-valuenow', years_percent_luminosity);
  progress_luminosity.setAttribute('style', "width: " + years_percent_luminosity + "%");
  luminosity_text.innerHTML = "🌟 The Sun’s luminosity will increase by 10% in " + years_until_luminosity + " years";
  tooltip_luminosity.setAttribute('data-original-title',"Counting from the beginning of the Solar System. " + years_percent_luminosity.toFixed(4) + "% time elapsed between formation of the Solar System and this event.");
}

function and_mw() {
  var d = new Date();
  var tooltip_and_mw = document.getElementById("tooltip_and_mw");
  var progress_and_mw = document.getElementById("progress_and_mw");
  var and_mw_text = document.getElementById("and_mw_text");
  var year_and_mw = 4600000000;
  var date_and_mw = 4000000000 + 4600000000;
  var years_percent_and_mw = year_and_mw/date_and_mw*100;
  var years_until_and_mw = date_and_mw-year_and_mw;
  progress_and_mw.setAttribute('aria-valuenow', years_percent_and_mw);
  progress_and_mw.setAttribute('style', "width: " + years_percent_and_mw + "%");
  and_mw_text.innerHTML = "🌌 Andromeda Galaxy will collide with the Milky Way in " + years_until_and_mw + " years";
  tooltip_and_mw.setAttribute('data-original-title',"Counting from the beginning of the Solar System. " + years_percent_and_mw.toFixed(4) + "% time elapsed between formation of the Solar System and this event.");
}

function redgiant() {
  var d = new Date();
  var tooltip_redgiant = document.getElementById("tooltip_redgiant");
  var progress_redgiant = document.getElementById("progress_redgiant");
  var redgiant_text = document.getElementById("redgiant_text");
  var year_redgiant = 4600000000;
  var date_redgiant = 5000000000 + 4600000000;
  var years_percent_redgiant = year_redgiant/date_redgiant*100;
  var years_until_redgiant = date_redgiant-year_redgiant;
  progress_redgiant.setAttribute('aria-valuenow', years_percent_redgiant);
  progress_redgiant.setAttribute('style', "width: " + years_percent_redgiant + "%");
  redgiant_text.innerHTML = "🌟 Sun will begin to evolve into a red giant in " + years_until_redgiant + " years";
  tooltip_redgiant.setAttribute('data-original-title',"Counting from the beginning of the Solar System. " + years_percent_redgiant.toFixed(4) + "% time elapsed between formation of the Solar System and this event.");
}

function earthmoon() {
  var d = new Date();
  var tooltip_earthmoon = document.getElementById("tooltip_earthmoon");
  var progress_earthmoon = document.getElementById("progress_earthmoon");
  var earthmoon_text = document.getElementById("earthmoon_text");
  var year_earthmoon = 4600000000;
  var date_earthmoon = 7590000000 + 4600000000;
  var years_percent_earthmoon = year_earthmoon/date_earthmoon*100;
  var years_until_earthmoon = date_earthmoon-year_earthmoon;
  progress_earthmoon.setAttribute('aria-valuenow', years_percent_earthmoon);
  progress_earthmoon.setAttribute('style', "width: " + years_percent_earthmoon + "%");
  earthmoon_text.innerHTML = "🌍 Earth and Moon are very likely to be destroyed by expanding Sun in " + years_until_earthmoon + " years";
  tooltip_earthmoon.setAttribute('data-original-title',"Counting from the beginning of the Solar System. " + years_percent_earthmoon.toFixed(4) + "% time elapsed between formation of the Solar System and this event.");
}

function starformation() {
  var d = new Date();
  var tooltip_starformation = document.getElementById("tooltip_starformation");
  var progress_starformation = document.getElementById("progress_starformation");
  var starformation_text = document.getElementById("starformation_text");
  var year_starformation = 13772000000;
  var date_starformation = 1000000000000 + 13772000000;
  var years_percent_starformation = year_starformation/date_starformation*100;
  var years_until_starformation = date_starformation-year_starformation;
  progress_starformation.setAttribute('aria-valuenow', years_percent_starformation);
  progress_starformation.setAttribute('style', "width: " + years_percent_starformation + "%");
  starformation_text.innerHTML = "🌌 Star formation ends in galaxies in " + years_until_starformation + " years";
  tooltip_starformation.setAttribute('data-original-title',"Counting from the beginning of the Universe. " + years_percent_starformation.toFixed(4) + "% time elapsed between the formation of the Universe and this event.");
}

function nucleons() {
  var d = new Date();
  var tooltip_nucleons = document.getElementById("tooltip_nucleons");
  var progress_nucleons = document.getElementById("progress_nucleons");
  var nucleons_text = document.getElementById("nucleons_text");
  var year_nucleons = 13772000000;
  var date_nucleons = 2e36 + 13772000000;
  var years_percent_nucleons = year_nucleons/date_nucleons*100;
  var years_until_nucleons = date_nucleons-year_nucleons;
  progress_nucleons.setAttribute('aria-valuenow', years_percent_nucleons);
  progress_nucleons.setAttribute('style', "width: " + years_percent_nucleons + "%");
  nucleons_text.innerHTML = "Estimated minimal time for all nucleons in the observable universe to decay: " + years_until_nucleons + " years";
  tooltip_nucleons.setAttribute('data-original-title',"Counting from the beginning of the Universe. " + years_percent_nucleons + "% time elapsed between the formation of the Universe and this event.");
}

function bhole() {
  var d = new Date();
  var tooltip_bhole = document.getElementById("tooltip_bhole");
  var progress_bhole = document.getElementById("progress_bhole");
  var bhole_text = document.getElementById("bhole_text");
  var year_bhole = 13772000000;
  var date_bhole = 5.6e99 + 13772000000;
  var years_percent_bhole = year_bhole/date_bhole*100;
  var years_until_bhole = date_bhole-year_bhole;
  progress_bhole.setAttribute('aria-valuenow', years_percent_bhole);
  progress_bhole.setAttribute('style', "width: " + years_percent_bhole + "%");
  bhole_text.innerHTML = "⚫ Estimated time until the most massive black hole TON 618 will decay by the Hawking process: " + years_until_bhole + " years";
  tooltip_bhole.setAttribute('data-original-title',"Counting from the beginning of the Universe. " + years_percent_bhole + "% time elapsed between the formation of the Universe and this event.");
}

setInterval(nextMinute, 1000);
setInterval(nextHour, 1000);
setInterval(nextDay, 1000);
setInterval(nextMonth, 1000);
setInterval(nextYear, 1000);

window.onload = function() {
  setTimeout(function(){antares();venus_mercury();vega();arecibo();
    polaris();ross248();uranus_neptune();mars_plants();loihi();
    venus_earth();glass();gliese();rushmore();phobos();orbit();
    luminosity();and_mw();redgiant();earthmoon();starformation();nucleons();bhole();},1000);
};

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function dayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}

function isLeap(year) {
    return new Date(year, 1, 29).getDate() === 29;
}
