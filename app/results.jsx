import { useLocalSearchParams } from "expo-router";
import { initialPromos, hospitals } from '../data/data';
import { useEffect } from "react";
export default function Results() {
    const { query } = useLocalSearchParams();
    const [medres, setMedRes] = useState([]);
    const [hosRes, setHosRes] = useState([]);
    useEffect(()=>{
        const q = query.trim().toLowerCase();
        const promoResults = initialPromos.filter((promo) => {
            return (
                promo.name.toLowerCase().includes(q) ||
                promo.hospital.toLowerCase().includes(q)
            );
        });
        setMedRes(promoResults);
    }, [])
    return (
        <View>
            <Text>Products: </Text>
            {}
            <Text>Services: </Text>
            {}
        </View>
    );
}
