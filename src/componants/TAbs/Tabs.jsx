
const Tabs = () => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 border-b-0 border-l-0 border-r-0 rounded-box p-6"></div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 border-b-0 border-l-0 border-r-0 rounded-box p-6"></div>
        </div>
    );
};

export default Tabs;