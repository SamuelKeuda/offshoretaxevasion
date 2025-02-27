
import kaboom from "kaboom"
import "kaboom/global"

// initialize context
kaboom({
  global: true,
  width: window.innerWidth,
  height: window.innerHeight,
  scale: 1.25,
  debug: true,
  background: [245,255,240]
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
  {PPscore,VVscore,KKscore,SSscore,SPscore}
) => {

  add([text("Piilotettu pääoma    :"), pos(20,20), scale(0.5), color(0,0,1)])

  add([text("Verovapaat Varat     :"), pos(20,40), scale(0.5), color(0,0,1)])

  add([text("Kätketyt Kassavirrat :"), pos(20,60), scale(0.5), color(0,0,1)])

  add([text("Salatut Sijoitukset  :"), pos(20,80), scale(0.5), color(0,0,1)])

  add([text("Salaiset Pankkitilit :"), pos(20,100), scale(0.5), color(0,0,1)])
  
let score_PP = add([
  text(PPscore),
  pos(260,20),
  scale(0.5),
  color(0,0,1),
  {
    value: PPscore,
  }
])

let score_VV = add([
    text(VVscore),
    pos(260,40),
    scale(0.5),
    color(0,0,1),
    {
      value: VVscore,
    }
  ])

  let score_KK = add([
    text(KKscore),
    pos(260,60),
    scale(0.5),
    color(0,0,1),
    {
      value: KKscore,
    }
  ])


  let score_SS = add([
    text(SSscore),
    pos(260,80),
    scale(0.5),
    color(0,0,1),
    {
      value: SSscore,
    }
  ])

  let score_SP = add([
    text(SPscore),
    pos(260,100),
    scale(0.5),
    color(0,0,1),
    {
      value: SPscore,
    }
  ])
const PP = add([
  sprite("button"),
  pos(20,160),
  scale(7,2.75),
  area(),
  "pp"
])

const PP_text = add([
  text("Piilotettu Pääoma"),
  pos(120,170),
  scale(0.75,0.75),
  color(0,0,1),
  
])

const VV = add([
  sprite("button"),
  pos(25,240),
  scale(2.75,2.75),
  "vv"
])

const VV_text = add([
  text("Verovapaat Varat"),
  pos(30,250),
  scale(0.4,0.5),
  color(0,0,1),
  "vv"
])

const KK = add([
  sprite("button"),
  pos(25,300),
  scale(2.75,2.75),
  "kk"
])

const KK_text = add([
  text("Kätketyt Kassavirrat"),
  pos(30,310),
  scale(0.4,0.5),
  color(0,0,1),
  "kk"
])

const SS = add([
  sprite("button"),
  pos(280,240),
  scale(2.75,2.75),
  "ss"
])

const SS_text = add([
  text("Salatut Sijoitukset"),
  pos(285,250),
  scale(0.4,0.5),
  color(0,0,1),
  "ss"
])

const SP = add([
  sprite("button"),
  pos(280,300),
  scale(2.75,2.75),
  "sp"
])

const SP_text = add([
  text("Salaiset Pankkitilit"),
  pos(285,310),
  scale(0.4,0.5),
  color(0,0,1),
  "sp"
])

onClick("pp",() => {
  score_PP.value++,
  score_PP.text = score_PP.value
  go("PP", {PPscore: score_PP.value, VVscore: score_VV.value, KKscore: score_KK.value, SSscore: score_SS.value, SPscore: score_SP.value})
  
})
  
})
      
go("main", {PPscore: 0, VVscore: 0, KKscore: 0, SSscore: 0, SPscore: 0})

 
scene("PP", (
  {PPscore,VVscore,KKscore,SSscore,SPscore}
) => {

  let pp_multi = 100
  let pp2_price = 100
  let pp3_price = 10000
  let pp4_price = 1000000
  let pp5_price = 100000000
  
  let pp2_amount = 0
  let pp3_amount = 0
  let pp4_amount = 0
  let pp5_amount = 0

  
    add([text("Piilotettu pääoma    :"), pos(20,20), scale(0.5), color(0,0,1)])

    add([text("Verovapaat Varat     :"), pos(20,40), scale(0.5), color(0,0,1)])

    add([text("Kätketyt Kassavirrat :"), pos(20,60), scale(0.5), color(0,0,1)])

    add([text("Salatut Sijoitukset  :"), pos(20,80), scale(0.5), color(0,0,1)])

    add([text("Salaiset Pankkitilit :"), pos(20,100), scale(0.5), color(0,0,1)])

  let score_PP = add([
    text(PPscore),
    pos(260,20),
    scale(0.5),
    color(0,0,1),
    {
      value: PPscore,
    }
  ])

  let score_VV = add([
      text(VVscore),
      pos(260,40),
      scale(0.5),
      color(0,0,1),
      {
        value: VVscore,
      }
    ])

    let score_KK = add([
      text(KKscore),
      pos(260,60),
      scale(0.5),
      color(0,0,1),
      {
        value: KKscore,
      }
    ])


    let score_SS = add([
      text(SSscore),
      pos(260,80),
      scale(0.5),
      color(0,0,1),
      {
        value: SSscore,
      }
    ])

    let score_SP = add([
      text(SPscore),
      pos(260,100),
      scale(0.5),
      color(0,0,1),
      {
        value: SPscore,
      }
    ])
  const PP = add([
    sprite("button"),
    pos(20,160),
    scale(7,2.75),
    area(),
    "pp1"
  ])

  const PP_text = add([
    text("Piilotettu Pääoma"),
    pos(120,170),
    scale(0.75,0.75),
    color(0,0,1),
  ])

  const PP2 = add([
    sprite("button"),
    pos(25,240),
    scale(2.75,2.75),
    area(),
    "pp2"
  ])

  const PP2_text = add([
    text("PP 2" + "       +1 PP/s\n" + "Hinta " + pp2_price + "       x" + pp2_amount),
    pos(30,250),
    scale(0.4),
    color(0,0,1),  
  ])

  const PP3 = add([
    sprite("button"),
    pos(25,300),
    scale(2.75,2.75),
    area(),
    "pp3"
  ])

  const PP3_text = add([
    text("PP 3" + "     +100 PP/s\n" + "Hinta " + pp3_price + "     x" + pp3_amount),
    pos(30,310),
    scale(0.4),
    color(0,0,1),
    
  ])

  const PP4 = add([
    sprite("button"),
    pos(280,240),
    scale(2.75,2.75),
    area(),
    "pp4"
  ])

  const PP4_text = add([
    text("PP 4" + "     +10k PP/s\n" + "Hinta " + pp4_price + "   x" + pp4_amount),
    pos(285,250),
    scale(0.4),
    color(0,0,1),
    
  ])

  const PP5 = add([
    sprite("button"),
    pos(280,300),
    scale(2.75,2.75),
    area(),
    "pp5"
  ])

  const PP5_text = add([
    text("PP 5" + "      +1m PP/s\n" + "Hinta " + pp5_price + " x" + pp5_amount),
    pos(285,310),
    scale(0.4),
    color(0,0,1),
  ])

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

  
  onClick("pp1",() => {
    score_PP.value += 1000000000000000 * pp_multi,
    score_PP.text = score_PP.value
  })

  onClick("pp2",() => {
      if(score_PP.value >= pp2_price) {
        score_PP.value -= Math.floor(pp2_price)
        pp2_amount += 1
        score_PP.text = score_PP.value
        PP2_text.text = "PP 2" + "       +1 PP/s\n" + "Hinta " + Math.floor(pp2_price) + "       x" + pp2_amount
      }
  })

  onClick("pp3",() => {
    if(score_PP.value >= pp3_price) {
      score_PP.value -= Math.floor(pp3_price)
      pp3_amount += 1
      score_PP.text = score_PP.value
      PP3_text.text = "PP 3" + "     +100 PP/s\n" + "Hinta " + Math.floor(pp3_price) + "     x" + pp3_amount
    }
  })

  onClick("pp4",() => {
    if(score_PP.value >= pp4_price) {
      score_PP.value -= Math.floor(pp4_price)
      pp4_amount += 1
      score_PP.text = score_PP.value
      PP4_text.text = "PP 4" + "     +10k PP/s\n" + "Hinta " + Math.floor(pp4_price) + "   x" + pp4_amount
    }
  })

  onClick("pp5",() => {
    if(score_PP.value >= pp5_price) {
      score_PP.value -= Math.floor(pp5_price)
      pp5_amount += 1
      score_PP.text = score_PP.value
      PP5_text.text = "PP 5" + "      +1m PP/s\n" + "Hinta " + Math.floor(pp5_price) + " x" + pp5_amount
    }
  })
})

scene("VV", (
  {PPscore,VVscore,KKscore,SSscore,SPscore}
) => {

  let vv_multi = 100
  let vv2_price = 100
  let vv3_price = 10000
  let vv4_price = 1000000
  let vv5_price = 100000000

  let vv2_amount = 0
  let vv3_amount = 0
  let vv4_amount = 0
  let vv5_amount = 0


    add([text("Piilotettu pääoma    :"), pos(20,20), scale(0.5), color(0,0,1)])

    add([text("Verovapaat Varat     :"), pos(20,40), scale(0.5), color(0,0,1)])

    add([text("Kätketyt Kassavirrat :"), pos(20,60), scale(0.5), color(0,0,1)])

    add([text("Salatut Sijoitukset  :"), pos(20,80), scale(0.5), color(0,0,1)])

    add([text("Salaiset Pankkitilit :"), pos(20,100), scale(0.5), color(0,0,1)])

  let score_PP = add([
    text(PPscore),
    pos(260,20),
    scale(0.5),
    color(0,0,1),
    {
      value: PPscore,
    }
  ])

  let score_VV = add([
      text(VVscore),
      pos(260,40),
      scale(0.5),
      color(0,0,1),
      {
        value: VVscore,
      }
    ])

    let score_KK = add([
      text(KKscore),
      pos(260,60),
      scale(0.5),
      color(0,0,1),
      {
        value: KKscore,
      }
    ])


    let score_SS = add([
      text(SSscore),
      pos(260,80),
      scale(0.5),
      color(0,0,1),
      {
        value: SSscore,
      }
    ])

    let score_SP = add([
      text(SPscore),
      pos(260,100),
      scale(0.5),
      color(0,0,1),
      {
        value: SPscore,
      }
    ])
  const PP = add([
    sprite("button"),
    pos(20,160),
    scale(7,2.75),
    area(),
    "pp1"
  ])

  const PP_text = add([
    text("Piilotettu Pääoma"),
    pos(120,170),
    scale(0.75,0.75),
    color(0,0,1),
  ])

  const PP2 = add([
    sprite("button"),
    pos(25,240),
    scale(2.75,2.75),
    area(),
    "pp2"
  ])

  const PP2_text = add([
    text("PP 2" + "       +1 PP/s\n" + "Hinta " + vv2_price + "       x" + vv2_amount),
    pos(30,250),
    scale(0.4),
    color(0,0,1),  
  ])

  const PP3 = add([
    sprite("button"),
    pos(25,300),
    scale(2.75,2.75),
    area(),
    "pp3"
  ])

  const PP3_text = add([
    text("PP 3" + "     +100 PP/s\n" + "Hinta " + vv3_price + "     x" + vv3_amount),
    pos(30,310),
    scale(0.4),
    color(0,0,1),

  ])

  const PP4 = add([
    sprite("button"),
    pos(280,240),
    scale(2.75,2.75),
    area(),
    "pp4"
  ])

  const PP4_text = add([
    text("PP 4" + "     +10k PP/s\n" + "Hinta " + vv4_price + "   x" + vv4_amount),
    pos(285,250),
    scale(0.4),
    color(0,0,1),

  ])

  const PP5 = add([
    sprite("button"),
    pos(280,300),
    scale(2.75,2.75),
    area(),
    "pp5"
  ])

  const PP5_text = add([
    text("PP 5" + "      +1m PP/s\n" + "Hinta " + vv5_price + " x" + vv5_amount),
    pos(285,310),
    scale(0.4),
    color(0,0,1),
  ])

  const obj = add([
    timer(),
  ])
  /*
  obj.loop(1, () => {
    score_PP.value += vv2_amount
    score_PP.value += vv3_amount * 100
    score_PP.value += vv4_amount * 10000
    score_PP.value += vv5_amount * 1000000
    score_PP.text = score_PP.value
  })
*/

  onClick("pp1",() => {
    
  })

  onClick("pp2",() => {
      if(score_VV.value >= vv2_price) {
        score_VV.value -= Math.floor(vv2_price)
        vv2_amount += 1
        score_VV.text = score_VV.value
        PP2_text.text = "PP 2" + "       +1 PP/s\n" + "Hinta " + Math.floor(vv2_price) + "       x" + vv2_amount
      }
  })

  onClick("pp3",() => {
    if(score_VV.value >= vv3_price) {
      score_VV.value -= Math.floor(vv3_price)
      vv3_amount += 1
      score_VV.text = score_VV.value
      PP3_text.text = "PP 3" + "     +100 PP/s\n" + "Hinta " + Math.floor(vv3_price) + "     x" + vv3_amount
    }
  })

  onClick("pp4",() => {
    if(score_VV.value >= vv4_price) {
      score_VV.value -= Math.floor(vv4_price)
      vv4_amount += 1
      score_VV.text = score_VV.value
      PP4_text.text = "PP 4" + "     +10k PP/s\n" + "Hinta " + Math.floor(vv4_price) + "   x" + vv4_amount
    }
  })

  onClick("pp5",() => {
    if(score_VV.value >= vv5_price) {
      score_VV.value -= Math.floor(vv5_price)
      vv5_amount += 1
      score_VV.text = score_VV.value
      PP5_text.text = "VV 5" + "      +" +  "\n" + "Hinta " + Math.floor(vv5_price) + " x" + vv5_amount
    }
  })
})