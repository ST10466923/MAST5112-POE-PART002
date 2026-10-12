import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  useWindowDimensions,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import StartersScreen from './StartersScreen';

type Category = 'Starters' | 'Main Meals' | 'Deserts';

const categories: Category[] = [
  'Starters',
  'Main Meals',
  'Deserts',
];

const specials = [
  {
    id: '1',
    name: 'Special 01',
    image: require('./assets/CrispyChickenWings.jpg'),
  },
  {
    id: '2',
    name: 'Special 2',
    image: require('./assets/GarlicBread.jpg'),
  },
  {
    id: '3',
    name: 'Special 3',
    image: require('./assets/PotatoSkin.jpg'),
  },
  {
    id: '4',
    name: 'Special 4',
    image: require('./assets/ChickenStrips.jpg'),
  },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('Starters');

  const [cartCount] = useState(0);
  const { width } = useWindowDimensions();

  const horizontalPadding = 29;
  const gridGap = 34;
  const cardWidth =
    (width - horizontalPadding * 2 - gridGap) / 2;

  

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
            activeOpacity={0.8}
            onPress={() => {
              console.log('Open cart');
            }}
            accessibilityRole="button"
            accessibilityLabel={`Cart, ${cartCount} items`}
          >
            <Text style={styles.cartText}>
              Cart{cartCount > 0 ? ` (${cartCount})` : ''}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Food Categories */}
        <View style={styles.categories}>
          {categories.map((category) => {
            const isSelected =
              selectedCategory === category;

            return (
              <TouchableOpacity
                key={category}
                style={styles.categoryButton}
                onPress={() => setSelectedCategory(category)}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isSelected && styles.selectedCategoryText,
                  ]}
                >
                  {category}
                </Text>

                <View
                  style={[
                    styles.categoryUnderline,
                    isSelected && styles.selectedUnderline,
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Specials Section */}
        <View style={styles.specialsSection}>
          <Text style={styles.sectionTitle}>SPECIALS</Text>

          <View style={styles.specialsGrid}>
            {specials.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.specialCard,
                  { width: cardWidth },
                ]}
                activeOpacity={0.85}
                onPress={() => {
                  console.log(`Selected ${item.name}`);
                }}
                accessibilityRole="button"
                accessibilityLabel={item.name}
              >
                {/* Placeholder for food image */}
                <View style={styles.imagePlaceholder} />
              </TouchableOpacity>
            ))}
          </View>
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
    paddingTop: 49,
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
    fontSize: 16,
    fontWeight: '400',
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
    fontSize: 9,
    fontWeight: '400',
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 56,
    marginHorizontal: 27,
    gap: 24,
  },

  categoryButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  categoryText: {
    fontSize: 8,
    color: '#858585',
    marginBottom: 8,
    textAlign: 'center',
  },

  selectedCategoryText: {
    color: '#858585',
  },

  categoryUnderline: {
    height: 1,
    width: '100%',
    backgroundColor: '#D9D9D9',
  },

  selectedUnderline: {
    backgroundColor: '#D9D9D9',
  },

  specialsSection: {
    marginTop: 68,
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#111111',
    marginBottom: 29,
  },

  specialsGrid: {
    width: '100%',
    paddingHorizontal: 29,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 29,
    columnGap: 0,
  },

  specialCard: {
    height: 97,
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
  },

  imagePlaceholder: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
})