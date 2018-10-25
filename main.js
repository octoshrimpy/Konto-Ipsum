$(document).ready(function(){

  const kontoIpsumDictionary = [
    "soriano theo does like",
    "you know the ouch's",
    "mcMeanie cricket",
    "needver wou drink",
    "soup in the mouth",
    "commit GOOD BOYE",
    "you at wnesne yes you know",
    "but I found eye",
    "eye in the head",
    "i mama the yes",
    "don't I look clan",
    "answers as to my stomach",
    "mmmmmm soup",
    "dis tou seeks the chaos emeralds in the soup chamber",
    "you sausees",
    "what is baceo",
    "you frijsken heck",
    "is coco tot that pnign you sayin",
    "yes the fadvaiasiavfod you are not understadands",
    "dude you are aspsos cool",
    "yes the happens",
    "u feel so indoors g is hbrrsyanf",
    "it'd",
    "do the feaw",
    "riomfssddddd skeuls likwc terri la rihini",
    "yeah tin it os hapeleneing",
    "yes thats yes yep",
    "gi commgit the happy at yes you haha",
    "the nap word",
    "it is very human emotion to do when someone is what human call funny",
    "snape sisndd booggoodbyes",
    "have fucn home",
    "and it happen happily",
    "it help",
    "the bird seed is my bid",
    "wen i got banned form thanothef server",
    "you got the funnys",
    "i ama clamam",
    "you don't here peoelel complain",
    "that it is sissies is diss is as",
    "omer mredds up my message haha",
    "i mama the yes",
    "i was really scsre",
    'wait in verve fou d out what hapenfef friday',
    'you are that’s is mean',
    'ima no your are not fumb',
    'fit you yes mmhmm',
    'that os mo tou are beam',
    'fhhcd haha yeah I redmevn he did those I can’t help I Sanjay the run',
    'he coming',
    'i will mmhmmm yes brb',
  ]

  const moreThanKontoDictionary = [
    'or Beyonce, you do you',
    'more like rigone',
    'i am anime itself',
    'there is no g in peanut butter',
    'is secretly a furry',
    'rubs a rubber glove',
    'along a violin',
    'memes will help you my child',
    'robots can be gay',
    'why are you white',
    'atrocious telepath',
    'angry turtle',
    'give me the gauntlet',
    'becomes one with endless pile of big macs',
    'except I don\'t drink friends',
    'I do not encourage tax evasion',
    'when you\'re just like "orange meatballs!"',
    'Spanish is like French but in Comic Sans',
    'I should put a pros or st least a djiritivisj on uth here we are',
    'msot things you ask me',
    'a song of rice and curry',
    'the putter of inconvenience will do for now',
    'I am your parent now',
    'shake my good hotdog',
    'startles the neighbors',
    'grandma\'s manwich time',
    'have revenge on revenge',
    'yeeet',
    'wjat dod je say',
    'Prnoto kton',
  ]

  const puctuationDictionary  = [
    ".",
    ";",
    "!",
    "?",
    ",",
    ",",
    ",",
    "",
    "",
    "",
    ""
  ]

  const requiresCap = [
    ".",
    ";",
    "!",
    "?",
  ]

  let lastWritten = []

  $('.more').click(function(){

    //grab old text and new text
    const oldText = $('.kontoIpsum').text()
    let phrase;
    do {
      if ($('#moreThanKonto').is(":checked")) {
        const combinedDicts = kontoIpsumDictionary.concat(moreThanKontoDictionary)
        phrase = combinedDicts[Math.floor(Math.random()*combinedDicts.length)]
      } else {
        phrase = kontoIpsumDictionary[Math.floor(Math.random()*kontoIpsumDictionary.length)]
      }
    }
    while (lastWritten.includes(phrase))

    lastWritten.push(phrase)
    if(lastWritten.length > 10) {
      lastWritten.shift()
    }

    //capitalizing if needed
    console.log(oldText[oldText.length -1])

    if(requiresCap.includes(oldText[oldText.length -1]) || typeof oldText[oldText.length -1] == 'undefined') {
      phrase = phrase.charAt(0).toUpperCase() + phrase.slice(1)
    }

    //pick and set punctuation
    let punctuation = puctuationDictionary[Math.floor(Math.random()*puctuationDictionary.length)]
    let puntPhrase = phrase.concat(punctuation)

    //add spacing between sentences
    puntPhrase = " ".concat(puntPhrase)

    // add new text in front of old text
    const newText = oldText.concat(puntPhrase)

    $('.kontoIpsum').text(newText)
  })

  $('.redo').click(function(){
    $('.kontoIpsum').empty()
  })
})
