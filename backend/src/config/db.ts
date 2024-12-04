import mongoose from 'mongoose';

// Função para conectar ao banco de dados MongoDB
const connectDB = async () => {
  try {
    // Conectar ao MongoDB usando a URI fornecida no arquivo .env
    await mongoose.connect(process.env.MONGO_URI || '');

    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error', err);
    process.exit(1); // Encerrar o processo em caso de erro
  }
};

export default connectDB;
