



document.getElementById('tri-btn').addEventListener('click',function(){
    const getInputValue = getInput('tri-cm-input')
    const getInputValue2 = getInput('tri-cm-input-2')
    const multiplyTriangle = getInputValue * getInputValue2;
    console.log(multiplyTriangle);
    setResult('result-place-tri',multiplyTriangle)
})
////      rectangle calculation is here ///////

document.getElementById('rec-btn').addEventListener('click',function(){
    const getInputValue = getInput('rec-input-1')
    const getInputValue2 = getInput('rec-input-2')
    const multiplyTriangle = getInputValue * getInputValue2;
    console.log(multiplyTriangle);
    setResult('result-place-rec',multiplyTriangle)
})

document.getElementById('para-btn').addEventListener('click',function(){
    const paraB = getText('para-text')
    const paraH = getText('para-text-2')
    const result = paraB * paraH;
    console.log(paraB,paraH,result)
    setResult('result-place-para',result)
})