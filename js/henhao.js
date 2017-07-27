    var aGauge = null; //位移
    var iGauge = null; //风速
    var iiGauge = null;//应力
    var iiiGauge = null;//加速度
    var ivGauge = null;//风向
    var vGauge = null;//加速度
    var viGauge = null;//加速度
    $(document).ready(function () {
        aGauge = new AquaGauge('gauge');
        aGauge.props.minValue = 0;
        aGauge.props.maxValue = 10;
        aGauge.props.noOfDivisions = 10;
        aGauge.props.noOfSubDivisions = 2;
        aGauge.props.showMinorScaleValue = true;





        initPage();
        setupSlider();
        setupRangeSliders();
        

        iGauge = new AquaGauge('gaugeI');
        setupSmallGauge(iGauge);
        iGauge.props.minValue = 0;
        iGauge.props.maxValue = 30;
        iGauge.props.noOfDivisions = 6;
        iGauge.props.noOfSubDivisions = 2;
        iGauge.props.showMinorScaleValue = true;

        iiGauge = new AquaGauge('gaugeII');
        setupWhiteGauge(iiGauge);
        iiGauge.props.minValue = -100;
        iiGauge.props.maxValue = 100;
        iiGauge.props.noOfDivisions = 5;
        iiGauge.props.noOfSubDivisions = 2;
        iiGauge.props.showMinorScaleValue = true;

        iiiGauge = new AquaGauge('gaugeIII');
        setupGXGauge(iiiGauge);
        iiiGauge.props.minValue = -2;
        iiiGauge.props.maxValue = 2;
        iiiGauge.props.noOfDivisions = 8;
        iiiGauge.props.noOfSubDivisions = 2;
        iiiGauge.props.showMinorScaleValue = true;

        ivGauge = new AquaGauge('gaugeIV');
        setupDGauge(ivGauge);
        ivGauge.props.minValue = 0;
        ivGauge.props.maxValue = 360;
        ivGauge.props.noOfDivisions = 4;
        ivGauge.props.noOfSubDivisions = 2;
        ivGauge.props.showMinorScaleValue = true;

        vGauge = new AquaGauge('gaugeV');
        setupGYGauge(vGauge);
        vGauge.props.minValue = -2;
        vGauge.props.maxValue = 2;
        vGauge.props.noOfDivisions = 8;
        vGauge.props.noOfSubDivisions = 2;
        vGauge.props.showMinorScaleValue = true;

        viGauge = new AquaGauge('gaugeVI');
        setupGZGauge(viGauge);
        viGauge.props.minValue = -2;
        viGauge.props.maxValue = 2;
        viGauge.props.noOfDivisions = 8;
        viGauge.props.noOfSubDivisions = 2;
        viGauge.props.showMinorScaleValue = true;

        viiGauge = new AquaGauge('gaugeVII');
        setupTGauge(viiGauge);
        viiGauge.props.minValue = -20;
        viiGauge.props.maxValue = 80;
        viiGauge.props.noOfDivisions = 10;
        viiGauge.props.noOfSubDivisions = 2;
        viiGauge.props.showMinorScaleValue = true;
    });    

setInterval("showTime()", 1000);

function showTime() {
    /*
    var a = Math.random() + 5 ;
    var a1 = a.toFixed(2);
    aGauge.refresh(a1);
    
    var b = Math.random() * 5 + 5 ;
    var b1 = b.toFixed(2);
    iGauge.refresh(b1);

    var c = Math.random() * 500 + 2000;
    var c1 = c.toFixed(2);
    iiGauge.refresh(c1);

    var d = Math.random() - 0.5;
    var d1 = d.toFixed(2);
    iiiGauge.refresh(d1);

    var e = Math.random() * 45 + 225;
    var e1 = e.toFixed(2);
    ivGauge.refresh(e1);

    var f = Math.random() - 0.5;
    var f1 = f.toFixed(2);
    vGauge.refresh(f1);

    var g = Math.random() - 0.5;
    var g1 = g.toFixed(2);
    viGauge.refresh(g1);

    var h = Math.random() * (-5) - 5;
    var h1 = h.toFixed(2);
    viiGauge.refresh(h1);
    */
};
function update(val) {

    aGauge.refresh(val);

};

function update1(val) {

    iGauge.refresh(val);

};
function update2(val) {

    iiGauge.refresh(val);

};
function update3(val) {

    iiiGauge.refresh(val);

};
function update4(val) {

    ivGauge.refresh(val);

};
function update5(val) {

   vGauge.refresh(val);


};
function update6(val) {

    viGauge.refresh(val);

};
function update7(val) {

    viiGauge.refresh(val);

};