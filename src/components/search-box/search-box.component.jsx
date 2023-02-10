import './search-box.styles.css';

export const SearchBox = props => (
  <div className="search-box-wrapper">
    <input
      className="search-box"
      type="search"
      placeholder="search monster"
      onChange={props.searchChangeHandler}/>
  </div>
)