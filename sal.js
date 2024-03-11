let calcii=()=>{
    let bp=parseInt(document.getElementById("nine").value);
    let hra=document.getElementById("ten").value=bp*(10/100);
    let da=document.getElementById("eleven").value=bp*(5/100);
    let tra=document.getElementById("twelve").value=bp*(15/100);
    let pf=document.getElementById("thirteen").value=bp*(15/100);
    hra=parseInt(hra);
    da=parseInt(da);
    tra=parseInt(tra);
    pf=parseInt(pf);
    let gross=document.getElementById("fifteen").value=bp+hra+da+tra+pf;
    let net=document.getElementById("sixteen").value=gross-pf;
    document.getElementById("seventeen").innerHTML=
    `
    <tr>
      <td>BP: ${bp}</td>
      <td>HRA: ${hra}</td>
      <td>DA: ${da}</td>
      <td>TRA: ${tra}</td>
      <td>PF: ${pf}</td>
      <td>GROSS: ${gross}</td>
      <td>NET: ${net}</td>
    </tr>
    `
}