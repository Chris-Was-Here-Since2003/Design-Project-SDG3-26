import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(Stack)"
        options={{ headerShown: false }}
      />
        <Stack.Screen 
            name="components/FilterBar" 
            options={{ href: null }} 
            />
        <Stack.Screen 
            name="components/HospitalGrid" 
            options={{ href: null }} 
            />
        <Stack.Screen 
            name="components/HospitalCard" 
            options={{ href: null }} 
            />
        <Stack.Screen 
            name="components/PromoModal" 
            options={{ href: null }} 
            />
        <Stack.Screen 
            name="components/PromoCard" 
            options={{ href: null }} 
            />
        <Stack.Screen 
            name="components/PromoGrid" 
            options={{ href: null }} 
            />
        
    </Stack>
  );
}