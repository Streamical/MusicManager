import MMHeader from './MMHeader';
import MMContent from "./MMContent";
import MMFooter from "./MMFooter";
import MMMobileMenu from "./MMMobileMenu";

function App() {
    return (
        <div className="mm-page-container">
            <MMHeader />

            <MMContent />

            <MMFooter />

            <MMMobileMenu />
        </div>
    );
}

export default App;
