export default function MyComponent({ clicked }) {
    return (
      <div>
        <h2>Child component:</h2>
        {clicked ? <p>Clicked in parent</p> : <p>Not clicked in parent</p>}
  
        <button>Child Button</button>
      </div>
    );
  }