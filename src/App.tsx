import { useState } from 'react';
import { Home } from './components/Home';
import { TravelPresenter } from './components/TravelPresenter';
import { jejuSlides, busanSlides } from './utils/initialData';

function App() {
  const [activeRegion, setActiveRegion] = useState<'jeju' | 'busan' | null>(null);

  if (activeRegion === 'jeju') {
    return (
      <TravelPresenter
        region="jeju"
        slides={jejuSlides}
        onBackToHome={() => setActiveRegion(null)}
      />
    );
  }

  if (activeRegion === 'busan') {
    return (
      <TravelPresenter
        region="busan"
        slides={busanSlides}
        onBackToHome={() => setActiveRegion(null)}
      />
    );
  }

  return <Home onSelectRegion={setActiveRegion} />;
}

export default App;
