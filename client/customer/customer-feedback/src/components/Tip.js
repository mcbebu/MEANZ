function Tip() {
    return (
        <container className = "tip-field">
            <p> Give a tip! </p>
            <select>
                
                <option value="none"> none </option>
                <option value="$2"> $2 </option>
                <option value="$5"> $5 </option>
                <option value="$10"> $10 </option>

            </select>
        </container>
    );
}

export default Tip;

