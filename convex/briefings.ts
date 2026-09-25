import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

<<<<<<< HEAD
=======
// Create a briefing
>>>>>>> origin/feature/phase-2-database
export const createBriefing = mutation({
  args: {
    date: v.string(),
    title: v.string(),
    summary: v.string(),
    details: v.string(),
<<<<<<< HEAD
    type: v.string(),
=======
    type: v.union(
      v.literal("daily"),
      v.literal("weekly"),
      v.literal("custom")
    ),
>>>>>>> origin/feature/phase-2-database
    items: v.array(
      v.object({
        platform: v.string(),
        title: v.string(),
        description: v.string(),
<<<<<<< HEAD
        priority: v.string(),
=======
        priority: v.union(
          v.literal("high"),
          v.literal("medium"),
          v.literal("low")
        ),
>>>>>>> origin/feature/phase-2-database
        link: v.optional(v.string()),
      })
    ),
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

    const briefingId = await ctx.db.insert("briefings", {
      userId: user._id,
<<<<<<< HEAD
      date: args.date,
      title: args.title,
      summary: args.summary,
      details: args.details,
      type: args.type,
      items: args.items,
=======
      ...args,
>>>>>>> origin/feature/phase-2-database
      isRead: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return briefingId;
  },
});

<<<<<<< HEAD
// FIXED: Return null instead of throwing error
=======
// Get today's briefing
>>>>>>> origin/feature/phase-2-database
export const getTodayBriefing = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
<<<<<<< HEAD
      return null;
=======
      throw new Error("Unauthorized");
>>>>>>> origin/feature/phase-2-database
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => 
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    if (!user) {
<<<<<<< HEAD
      return null;
=======
      throw new Error("User not found");
>>>>>>> origin/feature/phase-2-database
    }

    const today = new Date().toISOString().split("T")[0];
    
<<<<<<< HEAD
    const briefings = await ctx.db
      .query("briefings")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();

    return briefings.find(b => b.date === today) || null;
  },
});

// FIXED: Return empty array instead of throwing error
=======
    const briefing = await ctx.db
      .query("briefings")
      .withIndex("by_user_date", (q) => 
        q.eq("userId", user._id).eq("date", today)
      )
      .first();

    return briefing;
  },
});

// Get all briefings
>>>>>>> origin/feature/phase-2-database
export const getBriefings = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
<<<<<<< HEAD
      return [];
=======
      throw new Error("Unauthorized");
>>>>>>> origin/feature/phase-2-database
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => 
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    if (!user) {
<<<<<<< HEAD
      return [];
=======
      throw new Error("User not found");
>>>>>>> origin/feature/phase-2-database
    }

    const briefings = await ctx.db
      .query("briefings")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
<<<<<<< HEAD
      .collect();

    return briefings.slice(0, args.limit || 30);
  },
});

=======
      .order("desc")
      .take(args.limit || 30);

    return briefings;
  },
});

// Mark briefing as read
>>>>>>> origin/feature/phase-2-database
export const markBriefingAsRead = mutation({
  args: {
    briefingId: v.id("briefings"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

<<<<<<< HEAD
=======
    const briefing = await ctx.db.get(args.briefingId);
    if (!briefing) {
      throw new Error("Briefing not found");
    }

>>>>>>> origin/feature/phase-2-database
    await ctx.db.patch(args.briefingId, {
      isRead: true,
      updatedAt: Date.now(),
    });
  },
});