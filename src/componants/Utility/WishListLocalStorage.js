const getstoreWishList = () => {
    const storeWishList = localStorage.getItem('wish-list-item');
    if (storeWishList) {
        return JSON.parse(storeWishList);
    }
    return [];
}

const saveWishlist = id => {
    const storeWishList = getstoreWishList();
    const exists = storeWishList.find(wishId => wishId === id);
    if (!exists) {
        storeWishList.push(id);
        localStorage.setItem('wish-list-item', JSON.stringify(storeWishList)); // Corrected line
    }
}

export { getstoreWishList, saveWishlist };