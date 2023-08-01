function SearchBar(props) {
    const {setSearchTerm, onSearchChange, onlyInStock, onCheckboxChange} = props
    return (
        <form>
            <input
            type="text"
            placeholder="Search..."
            value={setSearchTerm}
            onChange={onSearchChange}
            />
            <label>
                <input
                type="checkbox"
                checked={onlyInStock}
                onChange={onCheckboxChange}
                />
                Only show products in stock 
            </label>
        </form>
    );
}

export default SearchBar