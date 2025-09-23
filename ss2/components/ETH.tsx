import React, { useState } from 'react'
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Feather'

const { width } = Dimensions.get('window')

const ETH = () => {
  const [selectedSize, setSelectedSize] = useState('M')
  const [isFavorite, setIsFavorite] = useState(false)

  const sizes = ['S', 'M', 'L', 'XL']

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop' }}
            style={styles.productImage}
            resizeMode="cover"
          />
          
          <TouchableOpacity style={[styles.iconButton, styles.backButton]}>
            <Icon name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.iconButton, styles.favoriteButton]}
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Icon 
              name="heart" 
              size={24} 
              color={isFavorite ? "#FF6B6B" : "#333"} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.productName}>Giày Sneaker Nike Air Max</Text>
          
          <View style={styles.ratingContainer}>
            <View style={styles.ratingStars}>
              <Icon name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>4.9</Text>
            </View>
            <Text style={styles.reviewCount}>| 86 Đánh giá</Text>
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>2.499.000₫</Text>
            <Text style={styles.oldPrice}>3.299.000₫</Text>
          </View>
        </View>

        <View style={styles.selectionContainer}>
          <Text style={styles.selectionTitle}>Chọn Kích thước</Text>
          <View style={styles.sizeContainer}>
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.selectedSizeButton
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText
                ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Mô tả</Text>
          <Text style={styles.descriptionText}>
            Giày sneaker Nike Air Max với thiết kế hiện đại, thoải mái cho mọi hoạt động. 
            Được làm từ chất liệu cao cấp, đế giày có công nghệ đệm khí tiên tiến giúp 
            giảm chấn và tăng độ êm ái khi di chuyển. Phù hợp cho cả nam và nữ, 
            có thể phối với nhiều trang phục khác nhau từ thể thao đến casual.
          </Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
        </TouchableOpacity>
        
        <Pressable style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Mua ngay</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 400,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  iconButton: {
    position: 'absolute',
    top: 50,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    left: 20,
  },
  favoriteButton: {
    right: 20,
  },
  
  infoContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingStars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginRight: 12,
  },
  oldPrice: {
    fontSize: 18,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  
  selectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  selectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  sizeButton: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedSizeButton: {
    borderColor: '#FF6B6B',
    borderWidth: 2,
    backgroundColor: '#FFF5F5',
  },
  sizeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  selectedSizeText: {
    color: '#FF6B6B',
    fontWeight: '600',
  },
  
  descriptionContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    gap: 12,
  },
  addToCartButton: {
    flex: 1,
    height: 52,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B6B',
  },
  buyNowButton: {
    flex: 1,
    height: 52,
    borderRadius: 12,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF6B6B',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buyNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
})

export default ETH