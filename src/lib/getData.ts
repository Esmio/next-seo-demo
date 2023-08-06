import prisma from './prisma';

export async function getAllPosts() {
  return await prisma.post.findMany();
}

export async function getPostBySlug(slug: string) {
  const res = await prisma.post.findFirst({
    where: {
      slug: slug,
    },
    include: {
      author: true,
    },
  });
  console.log('res', res);
  return res;
}
