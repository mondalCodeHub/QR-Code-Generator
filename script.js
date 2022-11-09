// const and variables
const form = document.getElementById('qrInputForm');
const qr = document.getElementById('qrcode');

// QR( )
const onGenerateSubmitFunction = (e) => {
    e.preventDefault();
    clearUI();
    const url = document.getElementById('inputURL').value;
    const size = document.getElementById('size').value;
    // console.log(`URL : ${url} , QRSize : ${size}`);

    if (url === '') {
        alert("Enter any URL otherwise it will no work ")
    } else {
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);

            setTimeout(() => {
                const imageSource = qr.querySelector('img').src;
                saveQRImageButton(imageSource);
            }, 50)

        }, 1000);
    }
};

// Generate QR code function 
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });
};

// show spinner
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

// hide spinner
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

// clear DOM
const clearUI = () => {
    qr.innerHTML = '';
    const saveLinkRef = document.getElementById('saveLink');
    if(saveLinkRef){
        saveLinkRef.remove();
    }
}

// save Iimage button and append element 
const saveQRImageButton = (imageSource) => {
    const link = document.createElement('a');
    link.id = 'saveLink';
    link.classList = 'bg-slate-800 hover:bg-green-800 focus:bg-green-600 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = imageSource;
    link.download = 'qr-code'
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}



hideSpinner();
form.addEventListener('submit', onGenerateSubmitFunction);
// @mondalCodeHub | November-2022 