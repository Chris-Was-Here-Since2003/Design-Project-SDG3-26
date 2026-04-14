import { Tabs } from 'expo-router';
export default function TabLayout() {
    return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
            title: 'Home',
            tabBarLabel: 'O',
            }}
            />
        // The following screens are not meant to be navigated to directly, so we hide them from the tab bar and disable the link behavior.
        
        <Tabs.Screen 
            name="components/FilterBar" 
            options={{ href: null }} 
            />
        <Tabs.Screen 
            name="components/HospitalGrid" 
            options={{ href: null }} 
            />
        <Tabs.Screen 
            name="components/HospitalCard" 
            options={{ href: null }} 
            />
        <Tabs.Screen 
            name="components/PromoModal" 
            options={{ href: null }} 
            />
        <Tabs.Screen 
            name="components/PromoCard" 
            options={{ href: null }} 
            />
        <Tabs.Screen 
            name="components/PromoGrid" 
            options={{ href: null }} 
            />
        
    </Tabs>
    );
}