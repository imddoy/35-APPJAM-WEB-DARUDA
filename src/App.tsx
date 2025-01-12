// function App() {
//   return <></>;
// }

// export default App;
import BookmarkBtn from './components/common/communityBtn/cmting/Cmting';

const App = () => {
  return (
    <div>
      <BookmarkBtn isActive={false} />
      <BookmarkBtn isActive={true} />
    </div>
  );
};

export default App;
