
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const SHOW_PRODUCTS = 'DELETE_PRODUCT'


const createProduct = (product) => {
    return { type: CREATE_PRODUCT, payload:product };
}

const editProduct = (product) => {
    return { type: EDIT_PRODUCT, payload:product };
}

const deleteProduct = (product) => {
    return { type: DELETE_PRODUCT, payload:product };
}

export {createProduct, editProduct, deleteProduct}
  
