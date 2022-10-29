import app from '../app';
import RoutesInitializer from '../infra/initializers/Routes';

const router = new RoutesInitializer(app);


router.initializeRoutesFromFiles();
app.listen(3000, () => console.log('server is up!'));
