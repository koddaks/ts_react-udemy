import { ChildasFC} from './Child';

const Parent = () => {
    return <ChildasFC color='some sring' onClick={() => console.log('Clicked')}>
            
    </ChildasFC>
}

export default Parent;