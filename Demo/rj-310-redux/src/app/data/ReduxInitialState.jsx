const initialState ={
    pages:{
        createProduct:false,
        editProduct:false,
        deleteProduct:false,
        listProducts:true
      },
      products: importedData,
      currentProduct:importedData[0],
      newProduct:{id:'',name:'',price:0.0}
}