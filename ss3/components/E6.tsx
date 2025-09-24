import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

const E6 = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('window'))
  const [numColumns, setNumColumns] = useState(2)
  const products: Product[] = [
    { id: '1', name: 'iPhone 15 Pro', price: 999, image: 'https://via.placeholder.com/200x200/007ACC/FFFFFF?text=iPhone+15' },
    { id: '2', name: 'Samsung Galaxy S24', price: 899, image: 'https://via.placeholder.com/200x200/1BA1E2/FFFFFF?text=Galaxy+S24' },
    { id: '3', name: 'MacBook Pro', price: 1999, image: 'https://via.placeholder.com/200x200/FF6B35/FFFFFF?text=MacBook' },
    { id: '4', name: 'iPad Air', price: 599, image: 'https://via.placeholder.com/200x200/F7931E/FFFFFF?text=iPad+Air' },
    { id: '5', name: 'Apple Watch', price: 399, image: 'https://via.placeholder.com/200x200/FFD23F/000000?text=Apple+Watch' },
    { id: '6', name: 'AirPods Pro', price: 249, image: 'https://via.placeholder.com/200x200/EE4B2B/FFFFFF?text=AirPods' },
    { id: '7', name: 'Nintendo Switch', price: 299, image: 'https://via.placeholder.com/200x200/00A8E8/FFFFFF?text=Switch' },
    { id: '8', name: 'PlayStation 5', price: 499, image: 'https://via.placeholder.com/200x200/003459/FFFFFF?text=PS5' },
    { id: '9', name: 'Xbox Series X', price: 499, image: 'https://via.placeholder.com/200x200/107C10/FFFFFF?text=Xbox' },
    { id: '10', name: 'Surface Pro', price: 999, image: 'https://via.placeholder.com/200x200/0078D4/FFFFFF?text=Surface' },
  ]

  useEffect(() => {
    const onChange = (result: any) => {
      setScreenData(result.window)
      calculateColumns(result.window)
    }

    const subscription = Dimensions.addEventListener('change', onChange)
    calculateColumns(screenData)

    return () => subscription?.remove()
  }, [])

  const calculateColumns = (screen: any) => {
    const { width, height } = screen
    const isLandscape = width > height
    const isTablet = Math.min(width, height) > 600

    if (isTablet) {
      setNumColumns(4)
    } else if (isLandscape) {
      setNumColumns(3)
    } else {
      setNumColumns(2)
    }
  }

  const calculateItemSize = () => {
    const screenWidth = screenData.width
    const horizontalPadding = 24
    const itemSpacing = 12
    const totalSpacing = itemSpacing * (numColumns - 1)
    const availableWidth = screenWidth - horizontalPadding - totalSpacing
    const itemWidth = availableWidth / numColumns
    
    const { width, height } = screenData
    const isLandscape = width > height
    const isTablet = Math.min(width, height) > 600
    
    let aspectRatio = 1.35
    
    if (isTablet) {
      aspectRatio = 1.4
    } else if (isLandscape) {
      aspectRatio = 1.25
    }
    
    const itemHeight = itemWidth * aspectRatio
    
    const baseFontSize = isTablet ? 16 : 14
    const basePriceSize = isTablet ? 18 : 16
    
    return {
      width: itemWidth,
      height: itemHeight,
      fontSize: Math.max(itemWidth * 0.07, baseFontSize * 0.8),
      priceSize: Math.max(itemWidth * 0.08, basePriceSize * 0.8),
      imageSize: itemWidth - 16,
    }
  }


  const renderProduct = ({ item }: { item: Product }) => {
    const itemSize = calculateItemSize()
    
    return (
      <TouchableOpacity 
        style={[styles.productCard, {
          width: itemSize.width,
          height: itemSize.height,
        }]}
        onPress={() => console.log('Product pressed:', item.name)}
      >
        <Image 
          source={{ uri: item.image }} 
          style={[styles.productImage, {
            width: itemSize.imageSize,
            height: itemSize.imageSize * 0.85,
          }]}
          resizeMode="cover"
        />
        <Text 
          style={[styles.productName, { fontSize: itemSize.fontSize }]}
          numberOfLines={2}
        >
          {item.name}
        </Text>
        <Text 
          style={[styles.productPrice, { fontSize: itemSize.priceSize }]}
        >
          ${item.price}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Product Grid View</Text>
        <Text style={styles.subtitle}>
          {Math.round(screenData.width)}x{Math.round(screenData.height)} | {numColumns} columns
        </Text>
      </View>
      
      <FlatList
        data={products}
        renderItem={renderProduct}
        numColumns={numColumns}
        key={numColumns}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={numColumns > 1 ? styles.row : null}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    fontWeight: '500',
  },
  flatList: {
    flex: 1,
    paddingHorizontal: 12,
  },
  gridContainer: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    borderRadius: 12,
    marginBottom: 10,
  },
  productName: {
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 6,
    lineHeight: 20,
    paddingHorizontal: 4,
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#007ACC',
    textAlign: 'center',
  },
})

export default E6