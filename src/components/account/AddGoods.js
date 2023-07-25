// ... (previous code)

function AddGoods() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    productPrice: '',
    category: '', // Added category field
    condition: '', // Added condition field
    preferredLocation: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePostButtonClick = () => {
    console.log('Post data:', formData);
    // Here you can perform any further actions with the post data, e.g., sending it to an API, etc.
  };

  const handleImageUpload = (images) => {
    setFormData({ ...formData, images });
  };

  return (
    <>
      <form className="px-5 md:px-16">
        <div className='md:grid grid-cols-6 gap-16'>
          {/* ----------first col */}
          <div className="col-span-3" >
            <Card color="transparent" className=' px-4 py-3 w-full md:max-w-max'>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
              </Typography>
              <div className="mt-8 mb-2 max-w-screen-lg md:w-96 ">
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    size="lg"
                    label="Product name"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                  />
                  <Input
                    size="lg"
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                  <Input
                    size="lg"
                    label="Product price"
                    name="productPrice"
                    value={formData.productPrice}
                    onChange={handleInputChange}
                  />
                  <Select
                    size="lg"
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <Option>Electronics</Option>
                    <Option>Clothings and Jewelries</Option>
                    <Option>School material</Option>
                    <Option>Home Utensils</Option>
                    <Option>Health and Beauty</Option>
                    <Option>Others</Option>
                  </Select>
                  <Select
                    size="lg"
                    label="Condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                  >
                    <Option>New</Option>
                    <Option>Fairly used</Option>
                  </Select>
                  <Input
                    size="lg"
                    label="Preferred location"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </Card>
          </div>
          {/* ----------second col */}
          <div className="col-span-3" >
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>
        </div>
      </form>
      <button
        className="w-full mt-4 rounded-sm text-center py-3 text-white bg-my-orange"
        onClick={handlePostButtonClick}
      >
        Post
      </button>
    </>
  )
}

export default AddGoods;
