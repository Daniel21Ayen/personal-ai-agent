<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/phase-2-database
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Update user profile
export const updateUser = mutation({
  args: {
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => 
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    await ctx.db.patch(user._id, {
      ...args,
      updatedAt: Date.now(),
    });
  },
});

<<<<<<< HEAD
// Get user credits - Make sure this is exported
export const getCredits = query({
  args: {},
=======
import { query } from "./_generated/server";

export const getCredits = query({
>>>>>>> feature/phase-4-ai-agent
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
=======
// Get user credits - FIXED: Handle case when user is not authenticated
export const getCredits = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      // Return 0 or null instead of throwing error
>>>>>>> origin/feature/phase-2-database
      return 0;
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => 
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    return user?.credits ?? 0;
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/phase-2-database
});

// Update user credits
export const updateCredits = mutation({
  args: {
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => 
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    await ctx.db.patch(user._id, {
      credits: Math.max(0, (user.credits || 0) + args.amount),
      updatedAt: Date.now(),
    });
  },
<<<<<<< HEAD
=======
>>>>>>> feature/phase-4-ai-agent
=======
>>>>>>> origin/feature/phase-2-database
});