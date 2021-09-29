function account(request, response){
    const dynamicDate = new Date();

    response.json({
        data: dynamicDate.toGMTString()
    });
}

export default account;