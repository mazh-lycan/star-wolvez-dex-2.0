document.getElementById('pvp-btn').addEventListener('click', function() {
    var pvpOptions = document.getElementById('pvp-options');
    if (pvpOptions.style.display === 'none' || pvpOptions.style.display === '') {
        pvpOptions.style.display = 'block';
    } else {
        pvpOptions.style.display = 'none';
    }
});

document.getElementById('boss-btn').addEventListener('click', function() {
    var bossOptions = document.getElementById('boss-options');
    if (bossOptions.style.display === 'none' || bossOptions.style.display === '') {
        bossOptions.style.display = 'block';
    } else {
        bossOptions.style.display = 'none';
    }
});

document.getElementById('mining-btn').addEventListener('click', function() {
    var miningOptions = document.getElementById('mining-options');
    if (miningOptions.style.display === 'none' || miningOptions.style.display === '') {
        miningOptions.style.display = 'block';
    } else {
        miningOptions.style.display = 'none';
    }
});

document.getElementById('passive-btn').addEventListener('click', function() {
    var passiveOptions = document.getElementById('passive-options');
    if (passiveOptions.style.display === 'none' || passiveOptions.style.display === '') {
        passiveOptions.style.display = 'block';
    } else {
        passiveOptions.style.display = 'none';
    }
});

document.getElementById('royale-btn').addEventListener('click', function() {
    var royaleOptions = document.getElementById('royale-options');
    if (royaleOptions.style.display === 'none' || royaleOptions.style.display === '') {
        royaleOptions.style.display = 'block';
    } else {
        royaleOptions.style.display = 'none';
    }
});