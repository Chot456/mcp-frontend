function PlantingForm() {
    return (
        <div>
            <div className="container mt-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select className="form-control" id="status" required>
                            <option value="planted">Vacant</option>
                            <option value="damaged">Planted</option>
                            <option value="vacant">Damaged</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="size" className="form-label">Size</label>
                        <input type="text" className="form-control" id="size" placeholder="e.g. 10m x 10m" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="datePlanted" className="form-label">Date Planted</label>
                        <input type="date" className="form-control" id="datePlanted" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="area" className="form-label">Area</label>
                        <input type="text" className="form-control" id="area" value="Botolan, Zambales" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default PlantingForm;