import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import type { ImageSourcePropType } from 'react-native';

type Dessert = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
};

const desserts: Dessert[] = [
  {
    id: '1',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey center.',
    price: 65,
    image: require('./assets/ChocolateLavaCake.jpg'),
  },
  {
    id: '2',
    name: 'Strawberry Cheesecake',
    description: 'Creamy cheesecake topped with strawberry sauce.',
    price: 55,
    image: require('./assets/StrawberryCheesecake.jpg'),
  },
  {
    id: '3',
    name: 'Chocolate Brownie',
    description: 'Rich chocolate brownie with a soft center.',
    price: 45,
    image: require('./assets/ChocolateBrownie.jpg'),
  },
  {
    id: '4',
    name: 'Vanilla Ice Cream',
    description: 'Vanilla ice cream with chocolate sauce.',
    price: 35,
    image: require('./assets/VanillaIceCream.jpg'),
  },
];

export default function DessertsScreen() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Restaurant Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.restaurantName}>
              Ganyth Eatery
            </Text>

            <Text style={styles.tagline}>
              Culinary Excellence Since 2019
            </Text>
          </View>

          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => console.log('Open cart')}
            accessibilityRole="button"
            accessibilityLabel={`Cart, ${cartCount} items`}
          >
            <Text style={styles.cartText}>
              Cart{cartCount > 0 ? ` (${cartCount})` : ''}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Category Navigation */}
        <View style={styles.categories}>
          {['Starters', 'Main Meals', 'Desserts'].map(
            (category) => (
              <TouchableOpacity
                key={category}
                style={styles.category}
                onPress={() =>
                  console.log(`Open ${category}`)
                }
                accessibilityRole="button"
              >
                <Text
                  style={[
                    styles.categoryText,
                    category === 'Desserts' &&
                      styles.activeCategoryText,
                  ]}
                >
                  {category}
                </Text>

                <View
                  style={[
                    styles.categoryLine,
                    category === 'Desserts' &&
                      styles.activeCategoryLine,
                  ]}
                />
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Screen Title */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Desserts</Text>

          <Text style={styles.subtitle}>
            A sweet ending to your meal
          </Text>
        </View>

        {/* Dessert Menu */}
        <View style={styles.menuList}>
          {desserts.map((item) => (
            <View key={item.id} style={styles.menuItem}>
              <Image
                source={item.image}
                style={styles.foodImage}
                resizeMode="cover"
                accessibilityLabel={item.name}
              />

              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>
                  {item.name}
                </Text>

                <Text style={styles.description}>
                  {item.description}
                </Text>

                <Text style={styles.price}>
                  R {item.price.toFixed(2)}
                </Text>

                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    setCartCount((count) => count + 1);
                  }}
                  accessibilityRole="button"
                  accessibilityLabel={`Add ${item.name} to cart`}
                >
                  <Text style={styles.addButtonText}>
                    + Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingTop: 35,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  headerText: {
    flex: 1,
    paddingRight: 8,
  },
  restaurantName: {
    fontSize: 23,
    fontWeight: '700',
    color: '#111111',
    letterSpacing: -0.7,
  },
  tagline: {
    marginTop: 3,
    fontSize: 14,
    color: '#171717',
  },
  cartButton: {
    width: 80,
    height: 34,
    backgroundColor: '#2D2D2D',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
    marginHorizontal: 27,
    gap: 24,
  },
  category: {
    flex: 1,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 9,
    color: '#858585',
    marginBottom: 8,
  },
  activeCategoryText: {
    color: '#222222',
    fontWeight: '600',
  },
  categoryLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  activeCategoryLine: {
    backgroundColor: '#333333',
    height: 2,
  },
  titleSection: {
    marginTop: 35,
    marginBottom: 22,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111111',
  },
  subtitle: {
    fontSize: 13,
    color: '#777777',
    marginTop: 5,
  },
  menuList: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    gap: 15,
  },
  foodImage: {
    width: 110,
    height: 110,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    overflow: 'hidden',
  },
  itemDetails: {
    flex: 1,
    alignItems: 'flex-start',
  },
  itemName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#171717',
  },
  description: {
    fontSize: 11,
    color: '#777777',
    marginTop: 5,
    lineHeight: 16,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
    marginTop: 7,
  },
  addButton: {
    marginTop: 8,
    backgroundColor: '#2D2D2D',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  addButtonText: {
    fontSize: 11,
    color: '#FFFFFF',
  },
});