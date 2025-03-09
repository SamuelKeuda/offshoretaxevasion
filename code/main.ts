
import kaboom from "kaboom"
import "kaboom/global"

// initialize context
kaboom({
  global: true,
  width: window.innerWidth,
  height: window.innerHeight,
  scale: 1.25,
  debug: true,
  background: [245, 255, 240]
})

loadSprite("bg", "sprites/bg.png")
loadSprite("bg_UL", "sprites/bg_UL.png")
loadSprite("bg_UR", "sprites/bg_UR.png")
loadSprite("bg_DL", "sprites/bg_DL.png")
loadSprite("bg_DR", "sprites/bg_DR.png")
loadSprite("bg_L", "sprites/bg_L.png")
loadSprite("bg_R", "sprites/bg_R.png")
loadSprite("bg_DN", "sprites/bg_DN.png")
loadSprite("bg_UP", "sprites/bg_UP.png")
loadSprite("char", "sprites/char.png")
loadSprite("button", "sprites/button1.png")



scene("main", (
  { PPscore, VVscore, KKscore, SSscore, SPscore }
) => {

  add([text("Piilotettu pääoma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)])

  add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)])

  add([text("Kätketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)])

  add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)])

  add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)])

  let score_PP = add([
    text(PPscore),
    pos(260, 20),
    scale(0.5),
    color(0, 0, 1),
    {
      value: PPscore,
    }
  ])

  let score_VV = add([
    text(VVscore),
    pos(260, 40),
    scale(0.5),
    color(0, 0, 1),
    {
      value: VVscore,
    }
  ])

  let score_KK = add([
    text(KKscore),
    pos(260, 60),
    scale(0.5),
    color(0, 0, 1),
    {
      value: KKscore,
    }
  ])


  let score_SS = add([
    text(SSscore),
    pos(260, 80),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SSscore,
    }
  ])

  let score_SP = add([
    text(SPscore),
    pos(260, 100),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SPscore,
    }
  ])
  const PP = add([
    sprite("button"),
    pos(20, 160),
    scale(7, 2.75),
    area(),
    "pp"
  ])

  const PP_text = add([
    text("Piilotettu Pääoma"),
    pos(120, 170),
    scale(0.75, 0.75),
    color(0, 0, 1),

  ])

  const VV = add([
    sprite("button"),
    pos(25, 240),
    scale(2.75, 2.75),
    area(),
    "vv"
  ])

  const VV_text = add([
    text("Verovapaat Varat"),
    pos(30, 250),
    scale(0.4, 0.5),
    color(0, 0, 1),
  ])

  const KK = add([
    sprite("button"),
    pos(25, 300),
    scale(2.75, 2.75),
    area(),
    "kk"
  ])

  const KK_text = add([
    text("Kätketyt Kassavirrat"),
    pos(30, 310),
    scale(0.4, 0.5),
    color(0, 0, 1),
  ])

  const SS = add([
    sprite("button"),
    pos(280, 240),
    scale(2.75, 2.75),
    area(),
    "ss"
  ])

  const SS_text = add([
    text("Salatut Sijoitukset"),
    pos(285, 250),
    scale(0.4, 0.5),
    color(0, 0, 1),
  ])

  const SP = add([
    sprite("button"),
    pos(280, 300),
    scale(2.75, 2.75),
    area(),
    "sp"
  ])

  const SP_text = add([
    text("Salaiset Pankkitilit"),
    pos(285, 310),
    scale(0.4, 0.5),
    color(0, 0, 1),
  ])

  onClick("pp", () => {
    score_PP.value++,
      score_PP.text = score_PP.value
    go("PP", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })

  })

  onClick("vv", () => {
    go("VV", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })
  })

  onClick("kk", () => {
    go("KK", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })
  })

  onClick("ss", () => {
    go("SS", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })
  })

  onClick("sp", () => {
    go("SP", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })
  })

  const obj = add([
    timer(),
  ])

  obj.loop(1, () => {
    score_PP.value += pp2_amount
    score_PP.value += pp3_amount * 100
    score_PP.value += pp4_amount * 10000
    score_PP.value += pp5_amount * 1000000
    score_PP.text = score_PP.value
  })
  
})

go("main", { PPscore: 0, VVscore: 0, KKscore: 0, SSscore: 0, SPscore: 0 })



let pp2_amount = 0
let pp3_amount = 0
let pp4_amount = 0
let pp5_amount = 0

scene("PP", (
  { PPscore, VVscore, KKscore, SSscore, SPscore }
) => {

  
  let pp2_price = 100
  let pp3_price = 10000
  let pp4_price = 1000000
  let pp5_price = 100000000

  


  add([text("Piilotettu pääoma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)])

  add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)])

  add([text("Kätketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)])

  add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)])

  add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)])

  let score_PP = add([
    text(PPscore),
    pos(260, 20),
    scale(0.5),
    color(0, 0, 1),
    {
      value: PPscore,
    }
  ])

  let score_VV = add([
    text(VVscore),
    pos(260, 40),
    scale(0.5),
    color(0, 0, 1),
    {
      value: VVscore,
    }
  ])

  let score_KK = add([
    text(KKscore),
    pos(260, 60),
    scale(0.5),
    color(0, 0, 1),
    {
      value: KKscore,
    }
  ])


  let score_SS = add([
    text(SSscore),
    pos(260, 80),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SSscore,
    }
  ])

  let score_SP = add([
    text(SPscore),
    pos(260, 100),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SPscore,
    }
  ])
  const PP = add([
    sprite("button"),
    pos(20, 160),
    scale(7, 2.75),
    area(),
    "pp1"
  ])

  const PP_text = add([
    text("Piilotettu Pääoma"),
    pos(120, 170),
    scale(0.75, 0.75),
    color(0, 0, 1),
  ])

  const PP2 = add([
    sprite("button"),
    pos(25, 240),
    scale(2.75, 2.75),
    area(),
    "pp2"
  ])

  const PP2_text = add([
    text("PP 2" + "       +1 PP/s\n" + "Hinta " + pp2_price + "       x" + pp2_amount),
    pos(30, 250),
    scale(0.4),
    color(0, 0, 1),
  ])

  const PP3 = add([
    sprite("button"),
    pos(25, 300),
    scale(2.75, 2.75),
    area(),
    "pp3"
  ])

  const PP3_text = add([
    text("PP 3" + "     +100 PP/s\n" + "Hinta " + pp3_price + "     x" + pp3_amount),
    pos(30, 310),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP4 = add([
    sprite("button"),
    pos(280, 240),
    scale(2.75, 2.75),
    area(),
    "pp4"
  ])

  const PP4_text = add([
    text("PP 4" + "     +10k PP/s\n" + "Hinta " + pp4_price + "   x" + pp4_amount),
    pos(285, 250),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP5 = add([
    sprite("button"),
    pos(280, 300),
    scale(2.75, 2.75),
    area(),
    "pp5"
  ])

  const PP5_text = add([
    text("PP 5" + "      +1m PP/s\n" + "Hinta " + pp5_price + " x" + pp5_amount),
    pos(285, 310),
    scale(0.4),
    color(0, 0, 1),
  ])

  const back = add([
    sprite("button"),
    pos(450, 5),
    scale(0.45, 1.3),
    area(),
    "back"
  ])

  add([
    text("X"),
    pos(460, 8),
    scale(0.5),
    color(0, 0, 1),
  ])

  onClick("back", () => {
    go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })
  })


   let pp_multi = 1 + ((1.2 * score_VV.value) + (1.5 * score_KK.value) + (1.8 * score_SS.value) + (2.1 * score_SP.value))

  const obj = add([
    timer(),
  ])

  obj.loop(1, () => {
    score_PP.value += pp2_amount * pp_multi
    score_PP.value += pp3_amount * 100 * pp_multi
    score_PP.value += pp4_amount * 10000 * pp_multi 
    score_PP.value += pp5_amount * 1000000 * pp_multi
    score_PP.text = score_PP.value.toFixed(0)
  })

 

  
  onClick("pp1", () => {
    score_PP.value += 1 * pp_multi,
      score_PP.text = score_PP.value.toFixed(0)
  })

  onClick("pp2", () => {
    if (score_PP.value >= pp2_price) {
      score_PP.value -= pp2_price
      pp2_amount += 1
      score_PP.text = score_PP.value.toFixed(0)
      PP2_text.text = "PP 2" + "       +1 PP/s\n" + "Hinta " + pp2_price + "       x" + pp2_amount
    }
  })

  onClick("pp3", () => {
    if (score_PP.value >= pp3_price) {
      score_PP.value -= pp3_price
      pp3_amount += 1
      score_PP.text = score_PP.value.toFixed(0)
      PP3_text.text = "PP 3" + "     +100 PP/s\n" + "Hinta " + pp3_price + "     x" + pp3_amount
    }
  })

  onClick("pp4", () => {
    if (score_PP.value >= pp4_price) {
      score_PP.value -= pp4_price
      pp4_amount += 1
      score_PP.text = score_PP.value.toFixed(0)
      PP4_text.text = "PP 4" + "     +10k PP/s\n" + "Hinta " + pp4_price + "   x" + pp4_amount
    }
  })

  onClick("pp5", () => {
    score_PP.value += 99999999999999999999999
    if (score_PP.value >= pp5_price) {
      score_PP.value -= pp5_price
      //pp5_amount += 1
      score_PP.text = score_PP.value.toFixed(0)
      PP5_text.text = "PP 5" + "      +1m PP/s\n" + "Hinta " + pp5_price + " x" + pp5_amount
    }
  })
})

scene("VV", (
  { PPscore, VVscore, KKscore, SSscore, SPscore }
) => {
  

  let vv2_price = 100000
  let vv3_price = 10000000
  let vv4_price = 1000000000
  let vv5_price = 100000000000



  add([text("Piilotettu pääoma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)])

  add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)])

  add([text("Kätketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)])

  add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)])

  add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)])

  let score_PP = add([
    text(PPscore),
    pos(260, 20),
    scale(0.5),
    color(0, 0, 1),
    {
      value: PPscore,
    }
  ])

  let score_VV = add([
    text(VVscore),
    pos(260, 40),
    scale(0.5),
    color(0, 0, 1),
    {
      value: VVscore,
    }
  ])

  let score_KK = add([
    text(KKscore),
    pos(260, 60),
    scale(0.5),
    color(0, 0, 1),
    {
      value: KKscore,
    }
  ])


  let score_SS = add([
    text(SSscore),
    pos(260, 80),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SSscore,
    }
  ])

  let score_SP = add([
    text(SPscore),
    pos(260, 100),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SPscore,
    }
  ])
  const PP = add([
    sprite("button"),
    pos(20, 160),
    scale(7, 2.75),
    area(),
    "pp1"
  ])

  const PP_text = add([
    text("Verovapaat varat"),
    pos(120, 170),
    scale(0.75, 0.75),
    color(0, 0, 1),
  ])

  const PP2 = add([
    sprite("button"),
    pos(25, 240),
    scale(2.75, 2.75),
    area(),
    "pp2"
  ])

  const PP2_text = add([
    text("VV 2" + "       +1\n" + "Hinta " + vv2_price),
    pos(30, 250),
    scale(0.4),
    color(0, 0, 1),
  ])

  const PP3 = add([
    sprite("button"),
    pos(25, 300),
    scale(2.75, 2.75),
    area(),
    "pp3"
  ])

  const PP3_text = add([
    text("VV 3" + "     +100\n" + "Hinta " + vv3_price),
    pos(30, 310),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP4 = add([
    sprite("button"),
    pos(280, 240),
    scale(2.75, 2.75),
    area(),
    "pp4"
  ])

  const PP4_text = add([
    text("VV 4" + "     +10k\n" + "Hinta " + vv4_price),
    pos(285, 250),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP5 = add([
    sprite("button"),
    pos(280, 300),
    scale(2.75, 2.75),
    area(),
    "pp5"
  ])

  const PP5_text = add([
    text("VV 5" + "      +1m\n" + "Hinta " + vv5_price),
    pos(285, 310),
    scale(0.4),
    color(0, 0, 1),
  ])

  const back = add([
    sprite("button"),
    pos(450, 5),
    scale(0.45, 1.3),
    area(),
    "back"
  ])

  add([
    text("X"),
    pos(460, 8),
    scale(0.5),
    color(0, 0, 1),
  ])

  onClick("back", () => {
    go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })
  })

  
  const obj = add([
    timer(),
  ])

  obj.loop(1, () => {
    score_PP.value += pp2_amount
    score_PP.value += pp3_amount * 100
    score_PP.value += pp4_amount * 10000
    score_PP.value += pp5_amount * 1000000
    score_PP.text = score_PP.value
  })

  onClick("pp1", () => {
    if (score_PP.value >= 10000) {
      score_PP.value = 0,
        score_PP.text = score_PP.value
      score_VV.value += 1,
        score_VV.text = score_VV.value
    }
  })

  onClick("pp2", () => {
    if (score_VV.value >= vv2_price) {
      score_PP.value = 0
      score_VV.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
    }
  })

  onClick("pp3", () => {
    if (score_VV.value >= vv3_price) {
      score_PP.value = 0
      score_VV.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
    }
  })

  onClick("pp4", () => {
    if (score_VV.value >= vv4_price) {
      score_PP.value = 0
      score_VV.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
    }
  })

  onClick("pp5", () => {
    if (score_VV.value >= vv5_price) {
      score_PP.value = 0
      score_VV.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
    }
  })
})

scene("KK", (
  { PPscore, VVscore, KKscore, SSscore, SPscore }
) => {


  let kk2_price = 100
  let kk3_price = 10000
  let kk4_price = 1000000
  let kk5_price = 100000000



  add([text("Piilotettu pääoma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)])

  add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)])

  add([text("Kätketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)])

  add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)])

  add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)])

  let score_PP = add([
    text(PPscore),
    pos(260, 20),
    scale(0.5),
    color(0, 0, 1),
    {
      value: PPscore,
    }
  ])

  let score_VV = add([
    text(VVscore),
    pos(260, 40),
    scale(0.5),
    color(0, 0, 1),
    {
      value: VVscore,
    }
  ])

  let score_KK = add([
    text(KKscore),
    pos(260, 60),
    scale(0.5),
    color(0, 0, 1),
    {
      value: KKscore,
    }
  ])


  let score_SS = add([
    text(SSscore),
    pos(260, 80),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SSscore,
    }
  ])

  let score_SP = add([
    text(SPscore),
    pos(260, 100),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SPscore,
    }
  ])
  const PP = add([
    sprite("button"),
    pos(20, 160),
    scale(7, 2.75),
    area(),
    "pp1"
  ])

  const PP_text = add([
    text("Kätketyt kassavirrat"),
    pos(120, 170),
    scale(0.75, 0.75),
    color(0, 0, 1),
  ])

  const PP2 = add([
    sprite("button"),
    pos(25, 240),
    scale(2.75, 2.75),
    area(),
    "pp2"
  ])

  const PP2_text = add([
    text("KK 2" + "       +1 PP/s\n" + "Hinta " + kk2_price),
    pos(30, 250),
    scale(0.4),
    color(0, 0, 1),
  ])

  const PP3 = add([
    sprite("button"),
    pos(25, 300),
    scale(2.75, 2.75),
    area(),
    "pp3"
  ])

  const PP3_text = add([
    text("KK 3" + "     +100 PP/s\n" + "Hinta " + kk3_price),
    pos(30, 310),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP4 = add([
    sprite("button"),
    pos(280, 240),
    scale(2.75, 2.75),
    area(),
    "pp4"
  ])

  const PP4_text = add([
    text("KK 4" + "     +10k PP/s\n" + "Hinta " + kk4_price),
    pos(285, 250),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP5 = add([
    sprite("button"),
    pos(280, 300),
    scale(2.75, 2.75),
    area(),
    "pp5"
  ])

  const PP5_text = add([
    text("KK 5" + "      +1m PP/s\n" + "Hinta " + kk5_price),
    pos(285, 310),
    scale(0.4),
    color(0, 0, 1),
  ])

  const back = add([
    sprite("button"),
    pos(450, 5),
    scale(0.45, 1.3),
    area(),
    "back"
  ])

  add([
    text("X"),
    pos(460, 8),
    scale(0.5),
    color(0, 0, 1),
  ])

  onClick("back", () => {
    go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })
  })
  const obj = add([
    timer(),
  ])

  obj.loop(1, () => {
    score_PP.value += pp2_amount
    score_PP.value += pp3_amount * 100
    score_PP.value += pp4_amount * 10000
    score_PP.value += pp5_amount * 1000000
    score_PP.text = score_PP.value
  })

  onClick("pp1", () => {

  })

  onClick("pp2", () => {
    if (score_VV.value >= kk2_price) {
      score_VV.value -= Math.floor(kk2_price)
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
    }
  })

  onClick("pp3", () => {
    if (score_VV.value >= kk3_price) {
      score_VV.value -= Math.floor(kk3_price)
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
    }
  })

  onClick("pp4", () => {
    if (score_VV.value >= kk4_price) {
      score_VV.value -= Math.floor(kk4_price)
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
    }
  })

  onClick("pp5", () => {
    if (score_VV.value >= kk5_price) {
      score_VV.value -= Math.floor(kk5_price)
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
    }
  })
})

scene("SS", (
  { PPscore, VVscore, KKscore, SSscore, SPscore }
) => {


  let ss2_price = 100
  let ss3_price = 10000
  let ss4_price = 1000000
  let ss5_price = 100000000



  add([text("Piilotettu pääoma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)])

  add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)])

  add([text("Kätketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)])

  add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)])

  add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)])

  let score_PP = add([
    text(PPscore),
    pos(260, 20),
    scale(0.5),
    color(0, 0, 1),
    {
      value: PPscore,
    }
  ])

  let score_VV = add([
    text(VVscore),
    pos(260, 40),
    scale(0.5),
    color(0, 0, 1),
    {
      value: VVscore,
    }
  ])

  let score_KK = add([
    text(KKscore),
    pos(260, 60),
    scale(0.5),
    color(0, 0, 1),
    {
      value: KKscore,
    }
  ])


  let score_SS = add([
    text(SSscore),
    pos(260, 80),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SSscore,
    }
  ])

  let score_SP = add([
    text(SPscore),
    pos(260, 100),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SPscore,
    }
  ])
  const PP = add([
    sprite("button"),
    pos(20, 160),
    scale(7, 2.75),
    area(),
    "pp1"
  ])

  const PP_text = add([
    text("Salatut sijoitukset"),
    pos(120, 170),
    scale(0.75, 0.75),
    color(0, 0, 1),
  ])

  const PP2 = add([
    sprite("button"),
    pos(25, 240),
    scale(2.75, 2.75),
    area(),
    "pp2"
  ])

  const PP2_text = add([
    text("SS 2" + "       +1 PP/s\n" + "Hinta " + ss2_price),
    pos(30, 250),
    scale(0.4),
    color(0, 0, 1),
  ])

  const PP3 = add([
    sprite("button"),
    pos(25, 300),
    scale(2.75, 2.75),
    area(),
    "pp3"
  ])

  const PP3_text = add([
    text("SS 3" + "     +100 PP/s\n" + "Hinta " + ss3_price),
    pos(30, 310),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP4 = add([
    sprite("button"),
    pos(280, 240),
    scale(2.75, 2.75),
    area(),
    "pp4"
  ])

  const PP4_text = add([
    text("SS 4" + "     +10k PP/s\n" + "Hinta " + ss4_price),
    pos(285, 250),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP5 = add([
    sprite("button"),
    pos(280, 300),
    scale(2.75, 2.75),
    area(),
    "pp5"
  ])

  const PP5_text = add([
    text("SS 5" + "      +1m PP/s\n" + "Hinta " + ss5_price),
    pos(285, 310),
    scale(0.4),
    color(0, 0, 1),
  ])

  const back = add([
    sprite("button"),
    pos(450, 5),
    scale(0.45, 1.3),
    area(),
    "back"
  ])

  add([
    text("X"),
    pos(460, 8),
    scale(0.5),
    color(0, 0, 1),
  ])

  onClick("back", () => {
    go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })
  })
  const obj = add([
    timer(),
  ])

  obj.loop(1, () => {
    score_PP.value += pp2_amount
    score_PP.value += pp3_amount * 100
    score_PP.value += pp4_amount * 10000
    score_PP.value += pp5_amount * 1000000
    score_PP.text = score_PP.value
  })

  onClick("pp1", () => {

  })

  onClick("pp2", () => {
    if (score_KK.value >= ss2_price) {
      score_VV.value -= Math.floor(ss2_price)
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0
      score_SS.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
      score_SS.text = score_SS.value
    }
  })

  onClick("pp3", () => {
    if (score_KK.value >= ss3_price) {
      score_KK.value -= Math.floor(ss3_price)
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0
      score_SS.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
      score_SS.text = score_SS.value
    }
  })

  onClick("pp4", () => {
    if (score_KK.value >= ss4_price) {
      score_KK.value -= Math.floor(ss4_price)

      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0
      score_SS.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
      score_SS.text = score_SS.value
    }
  })

  onClick("pp5", () => {
    if (score_KK.value >= ss5_price) {
      score_KK.value -= Math.floor(ss5_price)

      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0
      score_SS.value = 0 //

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
      score_SS.text = score_SS.value
    }
  })
})

scene("SP", (
  { PPscore, VVscore, KKscore, SSscore, SPscore }
) => {


  let sp2_price = 100
  let sp3_price = 10000
  let sp4_price = 1000000
  let sp5_price = 100000000




  add([text("Piilotettu pääoma    :"), pos(20, 20), scale(0.5), color(0, 0, 1)])

  add([text("Verovapaat Varat     :"), pos(20, 40), scale(0.5), color(0, 0, 1)])

  add([text("Kätketyt Kassavirrat :"), pos(20, 60), scale(0.5), color(0, 0, 1)])

  add([text("Salatut Sijoitukset  :"), pos(20, 80), scale(0.5), color(0, 0, 1)])

  add([text("Salaiset Pankkitilit :"), pos(20, 100), scale(0.5), color(0, 0, 1)])

  let score_PP = add([
    text(PPscore),
    pos(260, 20),
    scale(0.5),
    color(0, 0, 1),
    {
      value: PPscore,
    }
  ])

  let score_VV = add([
    text(VVscore),
    pos(260, 40),
    scale(0.5),
    color(0, 0, 1),
    {
      value: VVscore,
    }
  ])

  let score_KK = add([
    text(KKscore),
    pos(260, 60),
    scale(0.5),
    color(0, 0, 1),
    {
      value: KKscore,
    }
  ])


  let score_SS = add([
    text(SSscore),
    pos(260, 80),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SSscore,
    }
  ])

  let score_SP = add([
    text(SPscore),
    pos(260, 100),
    scale(0.5),
    color(0, 0, 1),
    {
      value: SPscore,
    }
  ])
  const PP = add([
    sprite("button"),
    pos(20, 160),
    scale(7, 2.75),
    area(),
    "pp1"
  ])

  const PP_text = add([
    text("Salaiset Pankkitilit"),
    pos(120, 170),
    scale(0.75, 0.75),
    color(0, 0, 1),
  ])

  const PP2 = add([
    sprite("button"),
    pos(25, 240),
    scale(2.75, 2.75),
    area(),
    "pp2"
  ])

  const PP2_text = add([
    text("SP 2" + "       +1 PP/s\n" + "Hinta " + sp2_price),
    pos(30, 250),
    scale(0.4),
    color(0, 0, 1),
  ])

  const PP3 = add([
    sprite("button"),
    pos(25, 300),
    scale(2.75, 2.75),
    area(),
    "pp3"
  ])

  const PP3_text = add([
    text("SP 3" + "     +100 PP/s\n" + "Hinta " + sp3_price),
    pos(30, 310),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP4 = add([
    sprite("button"),
    pos(280, 240),
    scale(2.75, 2.75),
    area(),
    "pp4"
  ])

  const PP4_text = add([
    text("SP 4" + "     +10k PP/s\n" + "Hinta " + sp4_price),
    pos(285, 250),
    scale(0.4),
    color(0, 0, 1),

  ])

  const PP5 = add([
    sprite("button"),
    pos(280, 300),
    scale(2.75, 2.75),
    area(),
    "pp5"
  ])

  const PP5_text = add([
    text("SP 5" + "      +1m PP/s\n" + "Hinta " + sp5_price),
    pos(285, 310),
    scale(0.4),
    color(0, 0, 1),
  ])

  const back = add([
    sprite("button"),
    pos(450, 5),
    scale(0.45, 1.3),
    area(),
    "back"
  ])

  add([
    text("X"),
    pos(460, 8),
    scale(0.5),
    color(0, 0, 1),
  ])

  onClick("back", () => {
    go("main", { PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value })
  })
  const obj = add([
    timer(),
  ])

  obj.loop(1, () => {
    score_PP.value += pp2_amount
    score_PP.value += pp3_amount * 100
    score_PP.value += pp4_amount * 10000
    score_PP.value += pp5_amount * 1000000
    score_PP.text = score_PP.value
  })

  onClick("pp1", () => {

  })

  onClick("pp2", () => {
    if (score_SS.value >= sp2_price) {
      score_SP.value += 1
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0
      score_SS.value = 0

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
      score_SS.text = score_SS.value
      score_SP.text = score_SP.value
    }
  })

  onClick("pp3", () => {
    if (score_SS.value >= sp3_price) {
      score_SS.value -= Math.floor(sp3_price)
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0
      score_SS.value = 0

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
      score_SS.text = score_SS.value
      score_SP.text = score_SP.value
    }
  })

  onClick("pp4", () => {
    if (score_SS.value >= sp4_price) {
      score_SS.value -= Math.floor(sp4_price)
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0
      score_SS.value = 0

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
      score_SS.text = score_SS.value
      score_SP.text = score_SP.value
    }
  })



  onClick("pp5", () => {
    if (score_SS.value >= sp5_price) {
      score_SS.value -= Math.floor(sp5_price)
      score_PP.value = 0
      score_VV.value = 0
      score_KK.value = 0
      score_SS.value = 0

      score_PP.text = score_PP.value
      score_VV.text = score_VV.value
      score_KK.text = score_KK.value
      score_SS.text = score_SS.value
      score_SP.text = score_SP.value
    }
  })
})

